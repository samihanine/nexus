"use client";

import { Property } from "@nexus/schemas";
import { Strong, Section, Button, H3, Input, Label, Select } from "@nexus/ui";
import { useEffect, useMemo, useState } from "react";
import AddressSearch from "../address/address-search";
import { isObjectsEqual } from "@nexus/utils";
import EditHeader from "../common/edit-header";
import { useUpdateProperty } from "./use-update-property";
import toast from "react-hot-toast";
import { useUpdateAddress } from "../address/use-update-address";
import PropertyImageList from "./property-image-list";
import ImageDropZone from "./image-drop-zone";
import { useUploadImage } from "../upload/use-upload-image";
import PropertiesDetails from "./property-details";

export default function EditProperty(props: { property: Property }) {
  const [property, setProperty] = useState<Property>(props.property);
  const updatePropertyMutation = useUpdateProperty();
  const updateAddressMutation = useUpdateAddress();
  const uploadImageMutation = useUploadImage();
  const [preview, setPreview] = useState(false);

  const isEdited = useMemo(() => {
    return !isObjectsEqual(property, props.property);
  }, [property, props.property]);

  useEffect(() => {
    setProperty(props.property);
  }, [props.property]);

  const save = async () => {
    try {
      if (property.address) {
        await updateAddressMutation.mutateAsync({
          ...property.address,
          id: property.addressId,
        });
      }

      await updatePropertyMutation.mutateAsync({
        id: property.id,
        price: property.price,
        sellingPeriod: property.sellingPeriod,
        imageUrls: property.imageUrls,
      });
    } catch (error) {
      toast.error("Une erreur est survenue");
    }
  };

  const onUpload = async (fileList: FileList) => {
    const idToast = toast.loading("Chargement des images...");
    try {
      const files = Array.from(fileList);
      let urls: string[] = [];
      for (const file of files) {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("folder", "PROPERTY_IMAGES");
        const data = await uploadImageMutation.mutateAsync(formData as any);
        urls = [...urls, data.fileUrl];
      }
      setProperty({ ...property, imageUrls: [...property.imageUrls, ...urls] });
      toast.success("Image chargée avec succès");
    } catch (error) {
      console.error(error);
    } finally {
      toast.dismiss(idToast);
    }
  };

  return (
    <>
      <EditHeader>
        <div className="flex flex-col gap-2">
          <Strong className="text-2xl">Modifier votre propriété</Strong>
          <Strong>{property.address?.formattedAddress}</Strong>
        </div>

        <div className="flex gap-5 flex-col sm:flex-row">
          <Button
            variant={preview ? "destructive" : "outline"}
            className="!w-fit !px-14"
            onClick={() => setPreview(!preview)}
          >
            {preview ? "Quitter l'apperçu" : "Voir l'aperçu"}
          </Button>
          <Button
            className="!w-fit !px-14"
            disabled={!isEdited || updatePropertyMutation.isPending}
            onClick={save}
            variant={"secondary"}
          >
            {updatePropertyMutation.isPending ? "En cours..." : "Enregistrer"}
          </Button>
        </div>
      </EditHeader>

      {preview && (
        <Section>
          <PropertiesDetails property={property} />
        </Section>
      )}

      {!preview && (
        <Section>
          <div className="flex flex-col gap-12">
            <div className="flex gap-5 flex-col">
              <H3>Général</H3>
              <div className="flex gap-5 flex-col sm:flex-row">
                <div className="flex-1">
                  <Label>
                    Prix
                    <Input
                      value={property.price}
                      onChange={(e) =>
                        setProperty({
                          ...property,
                          price: parseFloat(e.target.value),
                        })
                      }
                      type="number"
                    />
                  </Label>
                </div>
                <div className="flex-1">
                  <Label>
                    Quand souhaitez-vous vendre ?
                    <Select
                      value={property.sellingPeriod}
                      onChange={(e) =>
                        setProperty({
                          ...property,
                          sellingPeriod: e.target.value,
                        })
                      }
                    >
                      <option value="0-6">0 à 6 mois</option>
                      <option value="6-12">6 à 12 mois</option>
                      <option value="12-24">12 à 24 mois</option>
                      <option value="24+">24 mois et plus</option>
                    </Select>
                  </Label>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-5">
              <H3>Images</H3>
              <ImageDropZone onUpload={onUpload} />
              <PropertyImageList
                images={property.imageUrls}
                setImages={(images) =>
                  setProperty({ ...property, imageUrls: images })
                }
              />
            </div>

            <div className="flex flex-col gap-5">
              <H3>Adresse</H3>
              <AddressSearch
                address={property.address || undefined}
                setAddress={(address) => setProperty({ ...property, address })}
              />
            </div>
          </div>
        </Section>
      )}
    </>
  );
}
