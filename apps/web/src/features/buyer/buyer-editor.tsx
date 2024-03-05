import { Buyer, Profile } from "@nexus/schemas";
import BuyerProfileDetails from "./buyer-details";
import { useEffect, useMemo, useState } from "react";
import EditHeader from "../common/edit-header";
import {
  Button,
  H3,
  Label,
  Section,
  Strong,
  Textarea,
  Input,
  Select,
} from "@nexus/ui";
import { isObjectsEqual } from "@nexus/utils";
import { useUpdateBuyer } from "./use-update-buyer";
import InputTable from "../common/input-table";
import toast from "react-hot-toast";
import AddressSearch from "../address/address-search";
import { useUpdateAddress } from "../address/use-update-address";
import SelectPropertyType from "../property/select-property-type";

export default function BuyerEditor(props: { buyer: Buyer }) {
  const [preview, setPreview] = useState(false);
  const [buyer, setBuyer] = useState(props.buyer);
  const updateBuyerMutation = useUpdateBuyer();
  const updateAddressMutation = useUpdateAddress();

  const isEdited = useMemo(() => {
    return !isObjectsEqual(buyer, props.buyer);
  }, [buyer]);

  useEffect(() => {
    setBuyer(props.buyer);
  }, [props.buyer]);

  const save = async () => {
    try {
      if (buyer.address) {
        await updateAddressMutation.mutateAsync({
          ...buyer.address,
          id: buyer.addressId,
        });
      }

      await updateBuyerMutation.mutateAsync({
        minimumParkingSpots: buyer.minimumParkingSpots,
        minimumBedrooms: buyer.minimumBedrooms,
        minimumBathrooms: buyer.minimumBathrooms,
        minimumRooms: buyer.minimumRooms,
        minimumLivableAreaInSquareFeet: buyer.minimumLivableAreaInSquareFeet,
        minimumLandAreaInSquareFeet: buyer.minimumLandAreaInSquareFeet,
        minimumYearBuilt: buyer.minimumYearBuilt,
        hasBasement: buyer.hasBasement,
        hasElevator: buyer.hasElevator,
        hasSauna: buyer.hasSauna,
        hasPool: buyer.hasPool,
        hasFireplace: buyer.hasFireplace,
        hasGym: buyer.hasGym,
        id: props.buyer.id as string,
        propertyType: buyer.propertyType,
        description: buyer.description,
        minimumPrice: buyer.minimumPrice,
        maximumPrice: buyer.maximumPrice,
        buyingPeriod: buyer.buyingPeriod,
      });

      toast.success("Vos critères de recherches ont été enregistrés");
    } catch (error) {
      toast.error("Une erreur s'est produite, veuillez réessayer plus tard");
    }
  };

  const inputs = useMemo(() => {
    return [
      {
        label: "Parking spots",
        value: buyer.minimumParkingSpots,
        type: "SHORT_NUMBER",
        onChange: (value: number) =>
          setBuyer({ ...buyer, minimumParkingSpots: value }),
      },
      {
        label: "Bedrooms",
        value: buyer.minimumBedrooms,
        type: "SHORT_NUMBER",
        onChange: (value: number) =>
          setBuyer({ ...buyer, minimumBedrooms: value }),
      },
      {
        label: "Bathrooms",
        value: buyer.minimumBathrooms,
        type: "SHORT_NUMBER",
        onChange: (value: number) =>
          setBuyer({ ...buyer, minimumBathrooms: value }),
      },
      {
        label: "Rooms",
        value: buyer.minimumRooms,
        type: "NUMBER",
        onChange: (value: number) =>
          setBuyer({ ...buyer, minimumRooms: value }),
      },
      {
        label: "Livable area in square feet",
        value: buyer.minimumLivableAreaInSquareFeet,
        type: "NUMBER",
        onChange: (value: number) =>
          setBuyer({ ...buyer, minimumLivableAreaInSquareFeet: value }),
      },
      {
        label: "Land area in square feet",
        value: buyer.minimumLandAreaInSquareFeet,
        type: "NUMBER",
        onChange: (value: number) =>
          setBuyer({ ...buyer, minimumLivableAreaInSquareFeet: value }),
      },
      {
        label: "Year built",
        value: buyer.minimumYearBuilt,
        type: "NUMBER",
        onChange: (value: number) =>
          setBuyer({ ...buyer, minimumYearBuilt: value }),
      },
    ];
  }, [buyer]);

  const secondaryInputs = useMemo(() => {
    return [
      {
        label: "Basement",
        value: buyer.hasBasement,
        type: "BOOLEAN",
        onChange: (value: boolean) =>
          setBuyer({ ...buyer, hasBasement: value }),
      },
      {
        label: "Elevator",
        value: buyer.hasElevator,
        type: "BOOLEAN",
        onChange: (value: boolean) =>
          setBuyer({ ...buyer, hasElevator: value }),
      },
      {
        label: "Sauna",
        value: buyer.hasSauna,
        type: "BOOLEAN",
        onChange: (value: boolean) => setBuyer({ ...buyer, hasSauna: value }),
      },
      {
        label: "Pool",
        value: buyer.hasPool,
        type: "BOOLEAN",
        onChange: (value: boolean) => setBuyer({ ...buyer, hasPool: value }),
      },
      {
        label: "Fireplace",
        value: buyer.hasFireplace,
        type: "BOOLEAN",
        onChange: (value: boolean) =>
          setBuyer({ ...buyer, hasFireplace: value }),
      },
      {
        label: "Gym",
        value: buyer.hasGym,
        type: "BOOLEAN",
        onChange: (value: boolean) => setBuyer({ ...buyer, hasGym: value }),
      },
    ];
  }, [buyer]);

  return (
    <>
      <EditHeader>
        <div className="flex flex-col gap-2 my-4">
          <Strong className="text-2xl text-center">
            Modifier vos critères de recherches
          </Strong>
        </div>

        <div className="flex gap-5 flex-row">
          <Button
            variant={preview ? "destructive" : "outline"}
            className="!w-fit sm:!px-14"
            onClick={() => setPreview(!preview)}
          >
            {preview ? "Quitter l'apperçu" : "Voir l'aperçu"}
          </Button>
          <Button
            className="!w-fit sm:!px-14"
            disabled={!isEdited || updateBuyerMutation.isPending}
            onClick={save}
            variant={"secondary"}
          >
            {updateBuyerMutation.isPending ? "En cours..." : "Enregistrer"}
          </Button>
        </div>
      </EditHeader>

      <Section>
        {!preview && (
          <div className="flex flex-col gap-5 w-full">
            <H3>Général</H3>

            <div className="flex flex-col sm:flex-row gap-5">
              <Label className="flex-1">
                Prix minimum
                <Input
                  type="number"
                  value={buyer.minimumPrice}
                  onChange={(e) =>
                    setBuyer({
                      ...buyer,
                      minimumPrice: Number(e.currentTarget.value),
                    })
                  }
                />
              </Label>

              <Label className="flex-1">
                Prix maximum
                <Input
                  type="number"
                  value={buyer.maximumPrice || Infinity}
                  onChange={(e) =>
                    setBuyer({
                      ...buyer,
                      maximumPrice: Number(e.currentTarget.value),
                    })
                  }
                />
              </Label>

              <Label className="flex-1">
                Periode d'achat
                <Select
                  value={buyer.buyingPeriod}
                  onChange={(e) =>
                    setBuyer({
                      ...buyer,
                      buyingPeriod: e.currentTarget.value,
                    })
                  }
                >
                  <option value="0-3">Dans les 3 prochains mois</option>
                  <option value="0-6">Dans les 6 prochains mois</option>
                  <option value="0-12">Dans l'année</option>
                  <option value="0-24">Dans les 2 prochaines années</option>
                </Select>
              </Label>
            </div>

            <Label>Types de propriétés</Label>
            <SelectPropertyType
              propertyType={buyer.propertyType}
              setPropertyType={(value) =>
                setBuyer({ ...buyer, propertyType: value })
              }
            />

            <H3 className="mt-8">Description</H3>
            <Textarea
              value={buyer.description}
              placeholder="Décrivez votre recherche"
              onChange={(e) =>
                setBuyer({ ...buyer, description: e.currentTarget.value })
              }
            />

            <H3 className="mt-8">Critères principaux</H3>
            <InputTable inputs={inputs} />

            <H3 className="mt-8">Critères secondaires</H3>
            <InputTable inputs={secondaryInputs} />

            <H3 className="mt-8">Zone de recherche</H3>
            <AddressSearch
              address={buyer.address || undefined}
              setAddress={(address) => setBuyer({ ...buyer, address })}
              setRadius={(radius) => setBuyer({ ...buyer, radius })}
              radius={buyer.radius}
            />
          </div>
        )}

        {preview && <BuyerProfileDetails buyer={buyer} />}
      </Section>
    </>
  );
}
