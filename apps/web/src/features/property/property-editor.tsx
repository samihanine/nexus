"use client";

import { Property } from "@nexus/schemas";
import { Strong, Section, Button, H4, Input, Label, Select } from "@nexus/ui";
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
import SelectPropertyType from "./select-property-type";
import InputTable from "../common/input-table";

export default function PropertyEditor(props: { property: Property }) {
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
        type: property.type,
        bedrooms: property.bedrooms,
        bathrooms: property.bathrooms,
        rooms: property.rooms,
        livableAreaInSquareFeet: property.livableAreaInSquareFeet,
        landAreaInSquareFeet: property.landAreaInSquareFeet,
        yearBuilt: property.yearBuilt,
        stories: property.stories,
        garages: property.garages,
        parkingSpots: property.parkingSpots,
        hasBasement: property.hasBasement,
        hasElevator: property.hasElevator,
        hasSauna: property.hasSauna,
        hasPool: property.hasPool,
        hasFireplace: property.hasFireplace,
        hasGym: property.hasGym,
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

  const inputs = [
    {
      label: "Parking spots",
      value: property.parkingSpots,
      type: "SHORT_NUMBER",
      onChange: (value: number) =>
        setProperty({ ...property, parkingSpots: value }),
    },
    {
      label: "Bedrooms",
      value: property.bedrooms,
      type: "SHORT_NUMBER",
      onChange: (value: number) =>
        setProperty({ ...property, bedrooms: value }),
    },
    {
      label: "Bathrooms",
      value: property.bathrooms,
      type: "SHORT_NUMBER",
      onChange: (value: number) =>
        setProperty({ ...property, bathrooms: value }),
    },
    {
      label: "Rooms",
      value: property.rooms,
      type: "NUMBER",
      onChange: (value: number) => setProperty({ ...property, rooms: value }),
    },
    {
      label: "Livable area in square feet",
      value: property.livableAreaInSquareFeet,
      type: "NUMBER",
      onChange: (value: number) =>
        setProperty({ ...property, livableAreaInSquareFeet: value }),
    },
    {
      label: "Land area in square feet",
      value: property.landAreaInSquareFeet,
      type: "NUMBER",
      onChange: (value: number) =>
        setProperty({ ...property, landAreaInSquareFeet: value }),
    },
    {
      label: "Year built",
      value: property.yearBuilt,
      type: "NUMBER",
      onChange: (value: number) =>
        setProperty({ ...property, yearBuilt: value }),
    },
  ];

  const secondaryInputs = [
    {
      label: "Has basement",
      value: property.hasBasement,
      type: "BOOLEAN",
      onChange: (value: boolean) =>
        setProperty({ ...property, hasBasement: value }),
    },
    {
      label: "Has elevator",
      value: property.hasElevator,
      type: "BOOLEAN",
      onChange: (value: boolean) =>
        setProperty({ ...property, hasElevator: value }),
    },
    {
      label: "Has sauna",
      value: property.hasSauna,
      type: "BOOLEAN",
      onChange: (value: boolean) =>
        setProperty({ ...property, hasSauna: value }),
    },
    {
      label: "Has pool",
      value: property.hasPool,
      type: "BOOLEAN",
      onChange: (value: boolean) =>
        setProperty({ ...property, hasPool: value }),
    },
    {
      label: "Has fireplace",
      value: property.hasFireplace,
      type: "BOOLEAN",
      onChange: (value: boolean) =>
        setProperty({ ...property, hasFireplace: value }),
    },
    {
      label: "Has gym",
      value: property.hasGym,
      type: "BOOLEAN",
      onChange: (value: boolean) => setProperty({ ...property, hasGym: value }),
    },
  ];

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
            <div className="flex gap-10 flex-col">
              <H4>Général</H4>
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

              <div className="flex-1 flex flex-col gap-5">
                <Label>Type de propriété</Label>
                <SelectPropertyType
                  propertyType={property.type}
                  setPropertyType={(type) => setProperty({ ...property, type })}
                />
              </div>
            </div>

            <div className="flex flex-col gap-5">
              <H4>Images</H4>
              <ImageDropZone onUpload={onUpload} />
              <PropertyImageList
                images={property.imageUrls}
                setImages={(images) =>
                  setProperty({ ...property, imageUrls: images })
                }
              />
            </div>

            <div className="flex flex-col gap-5">
              <H4>Caractéristiques généraux</H4>
              <InputTable inputs={inputs} />
            </div>

            <div className="flex flex-col gap-5">
              <H4>Caractéristiques secondaires</H4>
              <InputTable inputs={secondaryInputs} />
            </div>

            <div className="flex flex-col gap-5">
              <H4>Adresse</H4>
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
