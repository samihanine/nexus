import { Card, CardContent, CardFooter, CardHeader, Strong } from "@nexus/ui";
import { cn } from "@nexus/utils";
import { PropertyType } from "@prisma/client";

export default function SelectPropertyType({
  setPropertyType,
  propertyType,
}: {
  setPropertyType: (propertyType: PropertyType) => void;
  propertyType: PropertyType;
}) {
  const propertyTypes = [
    {
      label: "Maisons",
      value: "HOUSE",
      Icon: HouseIcon,
    },
    {
      label: "Condo",
      value: "CONDO",
      Icon: CondoIcon,
    },
    {
      label: "Multifamiliale",
      value: "MULTIFAMILY",
      Icon: MultifamilyIcon,
    },
    {
      label: "Maison de ville",
      value: "TOWNHOUSE",
      Icon: TownhouseIcon,
    },
    {
      label: "Terrain",
      value: "LAND",
      Icon: LandIcon,
    },
  ];

  return (
    <div className="flex gap-10 items-center">
      {propertyTypes.map((item, index) => (
        <Card
          key={index}
          className={cn(
            "cursor-pointer pt-5 px-4",
            item.value === propertyType && "bg-secondary"
          )}
          onClick={() => setPropertyType(item.value as PropertyType)}
        >
          <CardContent
            className={cn("flex flex-col gap-5 items-center justify-between")}
          >
            <item.Icon className="h-16" />

            <Strong>{item.label}</Strong>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

const HouseIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      {...props}
      viewBox="0 0 71 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M31.9056 38.9805H20.6826V58.9825H31.9056V38.9805Z"
        stroke="#292524"
        stroke-width="0.758658"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M25.4633 41.127H22.9326V48.2125H25.4633V41.127Z"
        stroke="#292524"
        stroke-width="0.758658"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M27.1236 48.2148H29.6543V41.1293H27.1236V48.2148Z"
        stroke="#292524"
        stroke-width="0.758658"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M25.4633 50.6016H22.9326V57.6871H25.4633V50.6016Z"
        stroke="#292524"
        stroke-width="0.758658"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M27.1236 57.6855H29.6543V50.6H27.1236V57.6855Z"
        stroke="#292524"
        stroke-width="0.758658"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M31.428 49.4059C31.428 49.905 31.0232 50.3098 30.5241 50.3098C30.0249 50.3098 29.6201 49.905 29.6201 49.4059C29.6201 48.9068 30.0249 48.502 30.5241 48.502C31.0237 48.502 31.428 48.9068 31.428 49.4059Z"
        stroke="#292524"
        stroke-width="0.758658"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M36.2772 48.2148H49.6582V38.9818H36.2772V48.2148Z"
        stroke="#292524"
        stroke-width="0.758658"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M42.9688 38.9805V48.2135"
        stroke="#292524"
        stroke-width="0.758658"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M36.2773 43.5957H49.6589"
        stroke="#292524"
        stroke-width="0.758658"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M35.2034 50.6016H50.7314V48.2158H35.2034V50.6016Z"
        stroke="#292524"
        stroke-width="0.758658"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M31.0181 26.9629H23.8623V33.3316H31.0181V26.9629Z"
        stroke="#292524"
        stroke-width="0.758658"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M31.0181 30.1113H23.8623"
        stroke="#292524"
        stroke-width="0.758658"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M32.0918 33.332H22.7891V35.7183H32.0918V33.332Z"
        stroke="#292524"
        stroke-width="0.758658"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M38.7827 15.168H31.627V21.5367H38.7827V15.168Z"
        stroke="#292524"
        stroke-width="0.758658"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M38.7827 18.3164H31.627"
        stroke="#292524"
        stroke-width="0.758658"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M39.856 21.5371H30.5537V23.9229H39.856V21.5371Z"
        stroke="#292524"
        stroke-width="0.758658"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M47.6909 26.9629H40.5352V33.3316H47.6909V26.9629Z"
        stroke="#292524"
        stroke-width="0.758658"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M47.6909 30.1113H40.5352"
        stroke="#292524"
        stroke-width="0.758658"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M48.7642 33.332H39.4619V35.7183H48.7642V33.332Z"
        stroke="#292524"
        stroke-width="0.758658"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M35.2038 6.47656L54.3631 25.6358V58.9832H35.2038H16.0439V25.6358L35.2038 6.47656Z"
        stroke="#292524"
        stroke-width="0.758658"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M35.2044 0.464844L9.81934 25.8498H16.0446L35.2044 6.47588L54.3637 25.8498H60.5889L35.2044 0.464844Z"
        stroke="#292524"
        stroke-width="0.758658"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M54.3643 53.2734H31.9062"
        stroke="#292524"
        stroke-width="0.758658"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M20.682 53.2734H16.0439"
        stroke="#292524"
        stroke-width="0.758658"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M11.721 46.666C12.7714 46.666 13.6227 47.5173 13.6227 48.5677V58.9815H9.81934V48.5677C9.81934 47.5173 10.6706 46.666 11.721 46.666Z"
        stroke="#292524"
        stroke-width="0.758658"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M5.79181 46.666C6.84222 46.666 7.69349 47.5173 7.69349 48.5677V58.9815H3.89063V48.5677C3.89012 47.5173 4.74189 46.666 5.79181 46.666Z"
        stroke="#292524"
        stroke-width="0.758658"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M9.81975 50.6016H7.69434V54.1446H9.81975V50.6016Z"
        stroke="#292524"
        stroke-width="0.758658"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M15.7475 50.6016H13.6221V54.1446H15.7475V50.6016Z"
        stroke="#292524"
        stroke-width="0.758658"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M58.6878 46.666C57.6374 46.666 56.7861 47.5173 56.7861 48.5677V58.9815H60.589V48.5677C60.589 47.5173 59.7377 46.666 58.6878 46.666Z"
        stroke="#292524"
        stroke-width="0.758658"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M64.6156 46.666C63.5651 46.666 62.7139 47.5173 62.7139 48.5677V58.9815H66.5167V48.5677C66.5172 47.5173 65.666 46.666 64.6156 46.666Z"
        stroke="#292524"
        stroke-width="0.758658"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M60.5894 54.1426H62.7148V50.5996H60.5894V54.1426Z"
        stroke="#292524"
        stroke-width="0.758658"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M54.6607 54.1426H56.7861V50.5996H54.6607V54.1426Z"
        stroke="#292524"
        stroke-width="0.758658"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M0.432617 58.9824H69.9763"
        stroke="#292524"
        stroke-width="0.758658"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

const CondoIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      {...props}
      viewBox="0 0 70 52"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M38.9304 49.2773H30.7949V51.3113H38.9304V49.2773Z"
        stroke="#737373"
        stroke-width="0.722998"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M38.9304 47.2441H30.7949V49.2781H38.9304V47.2441Z"
        stroke="#737373"
        stroke-width="0.722998"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M38.9304 34.7793H30.7949V47.2451H38.9304V34.7793Z"
        stroke="#737373"
        stroke-width="0.722998"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M30.7946 42.5859H12.8174V51.3119H30.7946V42.5859Z"
        stroke="#737373"
        stroke-width="0.722998"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M56.9074 42.5859H38.9307V51.3119H56.9074V42.5859Z"
        stroke="#737373"
        stroke-width="0.722998"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M27.4971 33.334H16.0156V40.0917H27.4971V33.334Z"
        stroke="#737373"
        stroke-width="0.722998"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M21.6583 19.2559H16.0488V26.0136H21.6583V19.2559Z"
        stroke="#737373"
        stroke-width="0.722998"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M53.6105 19.2559H48.001V26.0136H53.6105V19.2559Z"
        stroke="#737373"
        stroke-width="0.722998"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M42.9601 19.2559H37.3506V26.0136H42.9601V19.2559Z"
        stroke="#737373"
        stroke-width="0.722998"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M32.3097 19.2559H26.7002V26.0136H32.3097V19.2559Z"
        stroke="#737373"
        stroke-width="0.722998"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M21.6583 5.14844H16.0488V11.9061H21.6583V5.14844Z"
        stroke="#737373"
        stroke-width="0.722998"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M53.6105 5.14844H48.001V11.9061H53.6105V5.14844Z"
        stroke="#737373"
        stroke-width="0.722998"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M42.9601 5.14844H37.3506V11.9061H42.9601V5.14844Z"
        stroke="#737373"
        stroke-width="0.722998"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M32.3097 5.14844H26.7002V11.9061H32.3097V5.14844Z"
        stroke="#737373"
        stroke-width="0.722998"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M21.7559 33.334V40.0921"
        stroke="#737373"
        stroke-width="0.722998"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M53.708 33.334H42.2266V40.0917H53.708V33.334Z"
        stroke="#737373"
        stroke-width="0.722998"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M47.9668 33.334V40.0921"
        stroke="#737373"
        stroke-width="0.722998"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M57.2673 2.80664H12.4561V51.312H57.2673V2.80664Z"
        stroke="#737373"
        stroke-width="0.722998"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M57.2672 28.5449H12.3906V30.907H57.2672V28.5449Z"
        stroke="#737373"
        stroke-width="0.722998"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M57.2672 14.5723H12.3906V16.9344H57.2672V14.5723Z"
        stroke="#737373"
        stroke-width="0.722998"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M60.0887 0.464844H9.56934V2.82693H60.0887V0.464844Z"
        stroke="#737373"
        stroke-width="0.722998"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M12.5918 18.1807C12.0532 17.9431 11.4587 17.8086 10.8322 17.8086C8.52561 17.8086 6.64127 19.5988 6.48187 21.8645C3.29616 22.0812 0.777344 24.727 0.777344 27.9678C0.777344 30.6806 2.5427 32.9774 4.98604 33.7824C5.68445 36.41 8.07273 38.3494 10.9201 38.3494C11.5004 38.3494 12.0599 38.2633 12.5918 38.1132V18.1807Z"
        stroke="#737373"
        stroke-width="0.722998"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M8.0127 37.6172V51.3133"
        stroke="#737373"
        stroke-width="0.722998"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M9.92285 38.3496V51.3122"
        stroke="#737373"
        stroke-width="0.722998"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M57.1318 18.1807C57.6704 17.9431 58.2649 17.8086 58.8914 17.8086C61.198 17.8086 63.0824 19.5988 63.2417 21.8645C66.4275 22.0812 68.9463 24.727 68.9463 27.9678C68.9463 30.6806 67.1809 32.9774 64.7376 33.7824C64.0392 36.41 61.6509 38.3494 58.8035 38.3494C58.2232 38.3494 57.6642 38.2633 57.1318 38.1132V18.1807Z"
        stroke="#737373"
        stroke-width="0.722998"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M61.7109 37.6172V51.3133"
        stroke="#737373"
        stroke-width="0.722998"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M59.8008 38.3496V51.3122"
        stroke="#737373"
        stroke-width="0.722998"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M4.20801 51.3125H65.5171"
        stroke="#737373"
        stroke-width="0.722998"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

const TownhouseIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      {...props}
      viewBox="0 0 70 52"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M49.6984 26.9941H38.9209V46.2016H49.6984V26.9941Z"
        stroke="#737373"
        stroke-width="0.722998"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M43.5114 29.0566H41.0811V35.861H43.5114V29.0566Z"
        stroke="#737373"
        stroke-width="0.722998"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M45.1082 35.8594H47.5381V29.055H45.1082V35.8594Z"
        stroke="#737373"
        stroke-width="0.722998"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M43.5114 38.1523H41.0811V44.9567H43.5114V38.1523Z"
        stroke="#737373"
        stroke-width="0.722998"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M45.1082 44.957H47.5381V38.1527H45.1082V44.957Z"
        stroke="#737373"
        stroke-width="0.722998"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M48.3729 37.8746C48.8522 37.8746 49.2408 37.486 49.2408 37.0067C49.2408 36.5273 48.8522 36.1387 48.3729 36.1387C47.8935 36.1387 47.5049 36.5273 47.5049 37.0067C47.5049 37.486 47.8935 37.8746 48.3729 37.8746Z"
        stroke="#737373"
        stroke-width="0.722998"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M53.3786 8.19141H15.9988L12.9258 19.8043H56.4512L53.3786 8.19141Z"
        stroke="#737373"
        stroke-width="0.722998"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M59.9104 19.8027H9.46582L10.695 22.7062H58.6812L59.9104 19.8027Z"
        stroke="#737373"
        stroke-width="0.722998"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M57.4613 22.707H11.916V50.8326H57.4613V22.707Z"
        stroke="#737373"
        stroke-width="0.722998"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M35.4098 26.9941H17.1777V38.2443H35.4098V26.9941Z"
        stroke="#737373"
        stroke-width="0.722998"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M26.2939 26.9941V34.0709"
        stroke="#737373"
        stroke-width="0.722998"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M17.1777 34.0703H35.4093"
        stroke="#737373"
        stroke-width="0.722998"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M49.6974 46.2012H38.9199V48.3937H49.6974V46.2012Z"
        stroke="#737373"
        stroke-width="0.722998"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M49.6974 48.3945H38.9199V50.5871H49.6974V48.3945Z"
        stroke="#737373"
        stroke-width="0.722998"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M38.9198 40.6152H35.2598V50.586H38.9198V40.6152Z"
        stroke="#737373"
        stroke-width="0.722998"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M53.3573 40.6152H49.6973V50.586H53.3573V40.6152Z"
        stroke="#737373"
        stroke-width="0.722998"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M35.2606 40.6152H11.916"
        stroke="#737373"
        stroke-width="0.722998"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M53.3584 40.6152H57.461"
        stroke="#737373"
        stroke-width="0.722998"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M24.049 3.63672H19.5752V8.19085H24.049V3.63672Z"
        stroke="#737373"
        stroke-width="0.722998"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M25.635 0.464844H17.9902V3.63573H25.635V0.464844Z"
        stroke="#737373"
        stroke-width="0.722998"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M0.604492 50.832H68.7729"
        stroke="#737373"
        stroke-width="0.722998"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export const MultifamilyIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      {...props}
      viewBox="0 0 72 37"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M28.6709 16.6003L28.7074 36.3849L31.1552 36.3803L31.1184 16.5957"
        stroke="#737373"
        stroke-width="0.7"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M26.7527 18.3095L21.8574 18.3184L21.8688 24.6236L26.7641 24.6148L26.7527 18.3095Z"
        stroke="#737373"
        stroke-width="0.7"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M26.7635 22.208L21.8682 22.2168L21.8725 24.6227L26.7678 24.6139L26.7635 22.208Z"
        stroke="#737373"
        stroke-width="0.7"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M25.3498 19.8398L23.2754 19.8438L23.2799 22.2081L25.3543 22.2041L25.3498 19.8398Z"
        stroke="#737373"
        stroke-width="0.7"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M26.7752 27.3174L21.8799 27.3262L21.8912 33.6314L26.7865 33.6226L26.7752 27.3174Z"
        stroke="#737373"
        stroke-width="0.7"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M26.7859 31.2178L21.8906 31.2266L21.895 33.6325L26.7902 33.6237L26.7859 31.2178Z"
        stroke="#737373"
        stroke-width="0.7"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M25.3606 28.8556L23.2861 28.8594L23.2904 31.2237L25.3648 31.22L25.3606 28.8556Z"
        stroke="#737373"
        stroke-width="0.7"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M50.6638 27.2763L45.7686 27.2852L45.7799 33.5904L50.6752 33.5816L50.6638 27.2763Z"
        stroke="#737373"
        stroke-width="0.7"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M50.6707 31.1748L45.7754 31.1836L45.7797 33.5895L50.675 33.5807L50.6707 31.1748Z"
        stroke="#737373"
        stroke-width="0.7"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M49.2727 28.8086L47.1982 28.8125L47.2027 31.1768L49.2771 31.1729L49.2727 28.8086Z"
        stroke="#737373"
        stroke-width="0.7"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M19.9473 15.4551L19.9858 36.4011"
        stroke="#737373"
        stroke-width="0.7"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M27.3783 15.4442L16.1358 15.4648L16.1318 13.2664L30.3243 13.2402"
        stroke="#737373"
        stroke-width="0.7"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M36.2534 14.5755L43.2854 14.5625L36.2376 5.98828L29.2217 14.5883L36.2534 14.5755Z"
        stroke="#737373"
        stroke-width="0.7"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M43.2859 14.5619L45.1318 14.5586L45.1355 16.5702L36.2576 16.5866L27.3799 16.603L27.376 14.5914L29.2222 14.5878"
        stroke="#737373"
        stroke-width="0.7"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M43.843 16.5742L43.8798 36.3588L41.432 36.3634L41.3955 16.5788"
        stroke="#737373"
        stroke-width="0.7"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M36.2876 31.6035L39.8036 31.5969L39.7827 20.3555L36.2667 20.3618L32.751 20.3685L32.7716 31.6099L36.2876 31.6035Z"
        stroke="#737373"
        stroke-width="0.7"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M45.7824 24.5713L50.6777 24.5625L50.6664 18.2572L45.7711 18.266L45.7824 24.5713Z"
        stroke="#737373"
        stroke-width="0.7"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M44.7134 11.8665L49.6086 11.8574L49.6017 7.99965C49.5992 6.64813 48.5013 5.55421 47.1493 5.55664C45.7977 5.55907 44.7036 6.65694 44.7061 8.00846L44.7134 11.8665Z"
        stroke="#737373"
        stroke-width="0.7"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M27.7812 11.8942L22.8859 11.9033L22.8789 8.04557C22.8765 6.69405 23.9702 5.59618 25.3218 5.59375C26.6738 5.59132 27.7715 6.68494 27.7742 8.03676L27.7812 11.8942Z"
        stroke="#737373"
        stroke-width="0.7"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M45.7824 24.5713L50.6777 24.5625L50.6734 22.1566L45.7781 22.1654L45.7824 24.5713Z"
        stroke="#737373"
        stroke-width="0.7"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M47.1766 22.168L49.251 22.1641L49.2465 19.7997L47.1721 19.8037L47.1766 22.168Z"
        stroke="#737373"
        stroke-width="0.7"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M52.5557 15.3965L52.5942 36.3425"
        stroke="#737373"
        stroke-width="0.7"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M45.1275 15.4089L56.3703 15.3879L56.366 13.1895L42.3467 13.2153"
        stroke="#737373"
        stroke-width="0.7"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M55.4166 13.1919L51.2049 1.33594L36.2286 1.36358L21.2523 1.39123L17.084 13.2627"
        stroke="#737373"
        stroke-width="0.7"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M39.8032 31.6006L32.7715 31.6133L32.7743 33.2027L39.806 33.19L39.8032 31.6006Z"
        stroke="#737373"
        stroke-width="0.7"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M39.8051 33.1885L32.7734 33.2012L32.7763 34.7905L39.808 34.7779L39.8051 33.1885Z"
        stroke="#737373"
        stroke-width="0.7"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M39.8061 34.7784L32.7744 34.791L32.7773 36.3804L39.809 36.3677L39.8061 34.7784Z"
        stroke="#737373"
        stroke-width="0.7"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M38.3598 22.164L34.1934 22.1719L34.1987 24.9982L38.3652 24.9903L38.3598 22.164Z"
        stroke="#737373"
        stroke-width="0.7"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M38.3696 27.2948L34.2031 27.3027L34.2085 30.1291L38.3749 30.1212L38.3696 27.2948Z"
        stroke="#737373"
        stroke-width="0.7"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M52.5918 32.1869L69.2053 32.1562"
        stroke="#737373"
        stroke-width="0.7"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M62.6396 25.9965L66.9521 25.9883L66.9416 20.4337L62.629 20.4418L62.6396 25.9965Z"
        stroke="#737373"
        stroke-width="0.7"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M62.6396 25.9965L66.9521 25.9883L66.9481 23.8688L62.6355 23.877L62.6396 25.9965Z"
        stroke="#737373"
        stroke-width="0.7"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M63.8894 23.8666L65.7168 23.8633L65.713 21.7803L63.8856 21.7835L63.8894 23.8666Z"
        stroke="#737373"
        stroke-width="0.7"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M56.0722 26.0062L60.3848 25.998L60.3742 20.4434L56.0616 20.4516L56.0722 26.0062Z"
        stroke="#737373"
        stroke-width="0.7"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M56.0722 26.0062L60.3848 25.998L60.3807 23.8786L56.0681 23.8868L56.0722 26.0062Z"
        stroke="#737373"
        stroke-width="0.7"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M57.3269 23.8783L59.1543 23.875L59.1505 21.792L57.3231 21.7953L57.3269 23.8783Z"
        stroke="#737373"
        stroke-width="0.7"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M69.168 16.5254L69.2044 36.31"
        stroke="#737373"
        stroke-width="0.7"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M52.7969 16.5185L70.5224 16.4857L70.519 14.5488L56.3691 14.5753"
        stroke="#737373"
        stroke-width="0.7"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M69.1703 14.5158L65.9751 5.52148L52.7812 5.54579"
        stroke="#737373"
        stroke-width="0.7"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M19.9856 32.2461L3.37207 32.2768"
        stroke="#737373"
        stroke-width="0.7"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M9.87509 20.5328L5.5625 20.541L5.57305 26.0956L9.88564 26.0874L9.87509 20.5328Z"
        stroke="#737373"
        stroke-width="0.7"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M9.87509 23.9688L5.5625 23.9766L5.56632 26.096L9.8789 26.0883L9.87509 23.9688Z"
        stroke="#737373"
        stroke-width="0.7"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M8.63406 21.8872L6.80664 21.8906L6.8106 23.9736L8.63802 23.9702L8.63406 21.8872Z"
        stroke="#737373"
        stroke-width="0.7"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M16.4483 20.5192L12.1357 20.5273L12.1463 26.082L16.4589 26.0738L16.4483 20.5192Z"
        stroke="#737373"
        stroke-width="0.7"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M16.4483 23.959L12.1357 23.9668L12.1396 26.0863L16.4521 26.0785L16.4483 23.959Z"
        stroke="#737373"
        stroke-width="0.7"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M15.2132 21.8754L13.3857 21.8789L13.3897 23.9619L15.2171 23.9585L15.2132 21.8754Z"
        stroke="#737373"
        stroke-width="0.7"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M3.33203 16.6484L3.36879 36.4331"
        stroke="#737373"
        stroke-width="0.7"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M19.7067 16.5806L1.98119 16.6131L1.97754 14.6765L16.1275 14.6504"
        stroke="#737373"
        stroke-width="0.7"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M3.3252 14.6363L6.48725 5.63007L19.6811 5.60547"
        stroke="#737373"
        stroke-width="0.7"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M1.28711 36.438L71.2871 36.3086"
        stroke="#737373"
        stroke-width="0.7"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

const LandIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.0"
      viewBox="0 0 1280.000000 1166.000000"
      preserveAspectRatio="xMidYMid meet"
      {...props}
    >
      <g
        transform="translate(0.000000,1166.000000) scale(0.100000,-0.100000)"
        fill="#000000"
        stroke="none"
      >
        <path d="M5746 11641 c-16 -17 -21 -43 -26 -118 -5 -78 -10 -98 -26 -110 -20 -15 -60 -10 -105 13 -50 25 -104 32 -138 18 -50 -21 -40 -71 32 -152 52 -59 61 -81 52 -128 -5 -30 -9 -34 -38 -34 -18 0 -41 7 -51 15 -30 23 -39 19 -72 -27 -20 -28 -58 -59 -110 -90 -98 -57 -143 -102 -128 -125 5 -9 50 -40 100 -69 132 -79 184 -143 184 -229 0 -25 -40 -69 -84 -92 -38 -20 -105 -20 -146 0 l-33 17 -41 -44 c-22 -24 -59 -53 -82 -64 -39 -20 -42 -20 -87 -4 -46 16 -48 16 -90 -6 -26 -14 -63 -50 -97 -94 -70 -91 -86 -108 -105 -108 -23 0 -19 50 10 126 14 36 25 72 25 79 0 7 -18 15 -42 19 -90 15 -124 61 -107 147 4 24 8 48 9 53 1 23 -87 -5 -149 -48 -39 -27 -77 -46 -94 -46 -23 0 -27 4 -27 30 0 55 -22 131 -46 160 -56 66 -132 58 -194 -20 -36 -45 -88 -74 -115 -64 -9 4 -27 30 -40 60 -41 94 -94 97 -150 9 -20 -30 -44 -59 -54 -65 -17 -9 -20 -6 -26 23 -17 80 -62 102 -90 42 -21 -42 -56 -69 -161 -124 -104 -54 -128 -78 -114 -115 17 -46 12 -114 -10 -136 -19 -19 -33 -20 -200 -20 l-180 0 0 -44 c0 -60 -13 -90 -66 -158 -56 -72 -74 -114 -74 -177 0 -47 2 -51 43 -78 27 -18 58 -54 86 -100 40 -67 42 -74 32 -106 -7 -19 -31 -60 -55 -90 -24 -31 -47 -72 -50 -91 -7 -38 1 -86 15 -86 18 0 81 -65 101 -104 16 -31 23 -67 27 -146 l6 -105 159 -82 c88 -45 170 -92 183 -106 23 -22 23 -25 8 -53 -32 -61 -18 -108 52 -185 22 -24 28 -26 66 -17 29 7 76 6 149 -3 106 -12 107 -12 159 13 l52 26 25 -29 c35 -42 68 -56 175 -75 l94 -17 6 -93 c8 -112 -4 -159 -37 -150 -145 42 -164 43 -269 20 -87 -20 -107 -29 -107 -52 -1 -33 -36 -80 -127 -176 l-92 -96 -78 25 c-43 13 -95 36 -115 50 -37 25 -38 27 -38 87 0 57 -2 63 -36 92 -100 87 -104 92 -104 138 l0 45 -88 21 c-108 27 -180 27 -252 2 -67 -24 -70 -24 -70 -5 0 22 -32 32 -151 44 -58 5 -138 17 -178 26 -70 16 -72 18 -95 64 -33 64 -101 124 -172 151 -32 12 -115 34 -184 47 -121 25 -126 25 -172 8 -62 -22 -138 -22 -264 -1 l-101 17 -31 -29 c-51 -47 -44 -104 20 -182 15 -19 28 -40 28 -46 0 -6 -18 -14 -40 -18 -55 -9 -99 -51 -139 -135 -19 -39 -40 -71 -46 -71 -6 0 -33 22 -59 50 -26 28 -54 50 -61 50 -8 0 -23 -26 -35 -57 -12 -32 -28 -68 -36 -80 -13 -20 -16 -21 -41 -8 -16 8 -47 15 -70 15 -51 0 -79 -29 -111 -117 -12 -32 -33 -70 -47 -83 l-25 -23 -60 31 c-41 22 -74 32 -105 32 -55 0 -65 -15 -65 -99 0 -71 -13 -83 -77 -74 -48 6 -56 -3 -56 -62 0 -27 13 -70 36 -121 20 -43 39 -89 42 -102 10 -35 -20 -39 -81 -9 -30 15 -68 27 -84 27 -25 0 -32 -6 -45 -36 -8 -20 -37 -67 -64 -103 -87 -117 -128 -224 -96 -251 15 -12 42 -11 160 6 l40 6 -4 -52 c-5 -85 19 -131 108 -205 79 -65 119 -120 108 -148 -3 -9 -29 -26 -57 -38 -84 -36 -95 -71 -64 -194 28 -112 -3 -145 -84 -90 -45 31 -118 36 -107 8 16 -43 25 -124 25 -229 0 -62 5 -135 11 -162 13 -63 30 -67 154 -43 56 11 94 15 102 9 28 -22 43 -102 43 -227 0 -69 3 -150 6 -178 6 -48 9 -53 31 -53 17 0 46 -20 88 -60 72 -70 124 -89 144 -51 7 11 25 28 42 36 28 15 36 14 105 -5 76 -20 94 -20 94 4 0 7 18 38 40 69 38 53 126 124 197 161 31 15 33 15 62 -10 33 -28 38 -56 22 -126 -8 -34 -7 -37 28 -60 20 -13 62 -61 94 -108 73 -108 101 -136 152 -156 67 -25 96 -17 122 36 30 58 53 72 53 32 0 -17 13 -45 32 -70 30 -39 33 -40 57 -27 14 7 50 37 79 65 65 62 90 72 167 68 l60 -3 21 42 c14 27 26 81 34 145 13 114 32 193 55 222 14 19 17 17 71 -42 31 -34 67 -65 80 -68 13 -3 24 -8 24 -10 0 -3 -12 -22 -26 -43 -30 -46 -54 -120 -54 -168 0 -31 4 -36 47 -55 25 -11 76 -25 112 -30 85 -12 200 -34 226 -43 17 -5 27 3 54 45 38 59 107 114 206 163 98 48 111 52 118 28 2 -11 23 -31 45 -45 61 -38 68 -57 37 -106 -26 -42 -105 -260 -105 -292 0 -22 -4 -22 -59 -1 l-44 17 -23 -27 c-13 -15 -30 -53 -40 -84 -72 -252 -58 -241 -205 -166 -63 32 -183 104 -267 160 -85 57 -159 103 -165 103 -7 0 -41 -18 -77 -40 -58 -35 -72 -40 -127 -40 l-62 0 -12 -42 c-9 -33 -8 -70 1 -159 12 -109 11 -119 -6 -155 l-19 -39 -135 -6 c-190 -9 -285 -35 -378 -102 l-49 -35 -32 25 c-17 14 -49 27 -71 30 -34 5 -48 0 -102 -35 -149 -97 -184 -172 -138 -293 10 -29 17 -56 15 -60 -3 -4 -23 -10 -44 -14 -64 -11 -65 -17 -30 -163 31 -127 32 -133 17 -191 l-14 -59 28 -17 c46 -27 60 -66 59 -167 -1 -50 -4 -94 -6 -99 -3 -5 21 -7 54 -6 83 3 95 -10 99 -113 4 -71 6 -80 23 -80 31 0 66 28 94 76 23 39 75 84 98 84 4 0 7 -43 7 -95 l0 -95 28 0 c16 0 55 16 88 37 32 20 74 44 93 54 l34 19 17 -28 c25 -40 72 -77 125 -97 25 -10 45 -21 45 -26 0 -4 -11 -20 -24 -36 -56 -68 -58 -90 -12 -182 43 -83 84 -121 133 -121 31 0 44 9 98 65 59 62 105 84 105 52 0 -7 -19 -60 -41 -118 -41 -103 -58 -193 -45 -242 13 -55 100 -40 165 28 23 25 46 45 51 45 4 0 10 -17 14 -37 3 -21 15 -52 25 -70 19 -31 85 -73 114 -73 8 0 49 22 90 50 91 59 131 80 151 80 8 0 32 -18 52 -40 60 -65 109 -51 174 50 44 68 65 79 91 46 27 -34 60 -33 112 3 75 51 106 63 156 59 l46 -3 36 70 c19 39 41 80 47 92 l12 22 73 -35 c69 -34 76 -35 150 -30 l78 5 -23 -32 c-12 -17 -73 -84 -134 -147 -60 -63 -120 -129 -131 -145 -36 -52 -63 -148 -63 -224 l0 -70 74 -50 c78 -53 122 -98 132 -135 5 -20 11 -21 92 -21 80 0 91 -2 138 -32 l52 -31 78 52 78 52 37 -38 c44 -47 82 -50 140 -11 53 35 107 35 223 -2 108 -34 113 -32 195 68 65 80 90 96 149 97 41 0 42 -1 42 -32 0 -18 13 -61 30 -96 33 -70 30 -70 135 -31 139 51 195 123 195 252 0 55 3 67 16 67 9 0 32 14 51 31 19 16 42 29 51 27 9 -2 27 -26 41 -53 l26 -50 50 0 c77 1 133 39 211 143 64 85 65 88 60 137 -3 28 -21 82 -41 122 -45 91 -123 164 -269 252 -73 44 -103 67 -94 72 8 4 90 19 184 33 93 14 192 32 220 40 64 20 127 65 165 120 l31 43 23 -23 c28 -28 68 -30 165 -9 36 8 86 14 112 15 42 0 48 -3 67 -34 40 -64 61 -177 61 -325 0 -138 -13 -238 -65 -506 -66 -344 -58 -496 65 -1120 50 -257 71 -426 71 -580 1 -243 -24 -311 -173 -486 -91 -106 -125 -153 -162 -228 -25 -48 -26 -55 -12 -69 13 -13 21 -13 61 -2 25 7 54 13 65 14 29 2 234 337 284 466 76 196 78 333 10 665 -34 162 -38 197 -39 350 -2 148 -4 175 -22 210 -11 22 -31 78 -44 125 -22 77 -24 104 -23 285 0 168 5 236 32 425 54 388 62 506 42 657 -13 97 -43 192 -80 259 l-29 51 55 12 c138 31 261 126 359 276 89 135 177 303 170 323 -3 11 8 87 25 171 39 198 39 191 -10 191 l-40 0 0 -45 c0 -24 -5 -68 -11 -97 l-12 -53 -22 67 c-22 69 -53 113 -87 124 -16 5 -18 18 -18 139 l0 133 -43 25 c-47 28 -99 81 -167 171 l-44 58 -63 -5 c-90 -7 -161 -44 -225 -119 -72 -83 -75 -83 -165 -57 l-76 23 -41 -45 c-22 -25 -60 -69 -84 -97 -52 -63 -96 -89 -118 -71 -44 37 -54 105 -29 198 7 29 17 77 20 106 6 48 5 53 -19 68 -14 10 -32 30 -40 45 -17 34 -32 166 -16 140 16 -25 27 -22 45 12 21 40 19 93 -5 140 -23 45 -96 120 -162 167 -38 27 -47 30 -52 17 -12 -32 20 -112 80 -197 39 -54 40 -57 17 -57 -9 0 -28 -11 -42 -24 -40 -37 -66 -41 -84 -12 -9 13 -37 38 -63 56 l-47 32 -66 -22 c-97 -32 -193 -100 -262 -187 -61 -76 -94 -131 -86 -140 3 -2 25 1 49 9 31 9 65 34 126 93 92 90 136 114 205 115 45 0 47 -1 47 -29 0 -16 -7 -48 -15 -71 -23 -64 -21 -70 26 -70 35 0 47 7 93 50 62 59 86 59 86 1 0 -21 -7 -60 -15 -87 -8 -27 -15 -59 -15 -71 0 -20 5 -23 44 -23 29 0 52 -7 67 -19 23 -19 24 -21 7 -48 -58 -93 -58 -121 -8 -244 17 -41 37 -98 43 -127 l12 -52 45 22 c45 23 63 45 161 205 26 43 48 65 82 83 51 27 72 23 92 -17 39 -77 59 -71 152 45 119 147 209 198 273 152 40 -29 39 -62 -5 -160 -39 -86 -41 -98 -22 -124 13 -17 16 -17 44 -2 17 8 40 31 52 49 25 40 49 62 77 71 17 5 24 0 34 -24 19 -45 14 -119 -15 -226 -15 -52 -25 -104 -23 -116 3 -25 31 -36 99 -37 30 -1 55 -8 70 -20 24 -19 24 -20 6 -48 -40 -62 -61 -123 -89 -259 -33 -163 -46 -199 -88 -247 -29 -33 -126 -84 -138 -73 -3 4 2 22 11 41 l17 35 -31 0 c-45 0 -66 -16 -94 -69 -29 -57 -67 -91 -104 -91 -74 0 -149 -46 -202 -125 -13 -19 -27 -35 -31 -35 -3 0 -13 21 -22 47 -9 25 -23 55 -33 65 -32 35 -50 23 -94 -64 -53 -107 -81 -144 -128 -168 l-38 -19 -6 62 c-8 84 -14 97 -46 97 -35 0 -63 -31 -86 -93 -30 -80 -49 -97 -105 -97 -99 0 -347 -61 -357 -88 -3 -7 2 -29 11 -48 9 -19 16 -45 16 -57 0 -20 15 -28 123 -66 158 -57 216 -84 266 -128 50 -42 79 -96 88 -160 6 -44 5 -46 -16 -40 -35 9 -61 -24 -61 -79 0 -52 -14 -84 -37 -84 -9 0 -38 20 -64 45 -56 52 -98 59 -143 24 l-26 -21 -19 46 c-27 61 -80 88 -96 49 -4 -10 -13 -86 -20 -169 -7 -84 -19 -164 -26 -179 -19 -39 -60 -66 -99 -68 -31 -2 -34 1 -42 36 -12 55 -41 107 -85 148 -39 37 -103 79 -120 79 -5 0 -15 -23 -22 -51 -19 -72 -64 -158 -107 -202 l-38 -38 -13 24 c-14 28 -59 47 -109 47 -34 0 -64 21 -64 46 0 11 -9 14 -32 12 -24 -2 -38 -12 -55 -38 -49 -78 -64 -91 -96 -88 -35 3 -50 25 -67 95 -13 54 -43 73 -72 46 -11 -10 -36 -42 -54 -71 -33 -51 -64 -72 -106 -72 -19 0 -20 4 -13 43 4 23 8 58 9 77 1 29 -3 36 -22 38 -23 4 -30 -3 -109 -96 -17 -19 -41 -35 -62 -39 l-33 -6 7 50 c9 71 -12 94 -94 104 -34 4 -65 10 -69 14 -4 4 -7 43 -6 88 0 112 26 170 86 197 24 11 62 20 86 20 40 0 42 2 42 29 0 49 10 61 77 91 53 24 64 33 58 47 -4 10 -13 59 -20 108 -20 140 -23 142 -110 102 -112 -52 -135 -47 -135 30 0 30 -7 101 -16 159 -15 96 -18 104 -39 104 -28 0 -71 -33 -89 -69 -8 -14 -22 -78 -31 -141 -9 -63 -25 -134 -35 -157 -20 -45 -61 -76 -69 -52 -8 25 -59 69 -80 69 -15 0 -28 -14 -46 -50 -14 -27 -30 -51 -35 -51 -6 -1 -15 -2 -22 -3 -7 -1 -17 21 -22 49 -10 43 -15 50 -37 53 -31 4 -49 -17 -97 -114 -35 -70 -93 -127 -125 -122 -17 2 -24 14 -33 54 -15 66 -20 74 -51 74 -18 0 -48 -23 -111 -88 -87 -89 -110 -102 -178 -102 -24 0 -24 0 -24 118 0 182 -14 188 -132 63 -43 -45 -75 -71 -89 -71 -20 0 -21 4 -16 44 4 24 25 86 48 137 23 52 43 117 46 147 l6 52 -42 0 c-52 0 -93 -20 -153 -76 -68 -63 -87 -65 -137 -12 -22 24 -41 48 -41 55 0 7 11 38 25 69 14 31 31 78 39 104 l14 47 -44 32 c-47 33 -48 37 -44 138 l2 52 -39 -5 c-66 -10 -106 -25 -183 -69 -41 -24 -88 -49 -104 -55 l-28 -10 5 42 c3 24 8 55 12 70 4 15 4 39 1 53 -5 20 -12 25 -40 25 -31 0 -104 -42 -121 -69 -3 -6 -19 -18 -35 -26 -28 -15 -29 -14 -47 22 -12 25 -35 48 -69 68 -51 29 -52 30 -57 90 -4 39 -19 89 -43 140 -26 58 -38 99 -42 147 -7 93 1 118 38 118 44 0 79 17 92 45 10 22 6 36 -31 108 -23 47 -39 90 -36 99 4 9 33 30 66 48 32 17 59 35 59 41 0 17 45 9 85 -16 62 -38 84 -33 123 25 17 28 36 50 41 50 4 0 16 -10 27 -21 33 -37 60 -41 145 -24 60 13 87 14 116 5 32 -9 40 -8 48 6 6 9 44 63 85 118 102 138 115 165 115 251 0 39 -4 85 -8 102 -11 43 10 44 56 3 52 -46 73 -41 92 22 8 29 19 59 24 66 18 29 46 6 89 -73 54 -102 73 -119 128 -110 l41 6 23 -81 c26 -91 62 -133 109 -128 25 3 26 5 23 62 -2 38 1 62 8 66 24 15 52 -4 76 -51 22 -44 28 -49 58 -49 51 0 81 41 96 132 19 115 37 172 63 196 23 21 25 22 60 7 61 -25 74 -21 82 28 4 23 36 101 72 173 49 98 68 149 76 203 10 64 14 72 37 78 93 22 136 74 131 161 -1 20 -6 22 -63 22 -106 0 -194 31 -275 96 -23 19 -43 34 -46 34 -2 0 -18 -29 -36 -65 -26 -56 -34 -65 -57 -65 -16 0 -37 12 -55 31 -16 17 -36 29 -45 27 -10 -2 -32 -39 -55 -92 -21 -50 -47 -98 -57 -109 -18 -18 -20 -18 -78 1 -32 11 -93 28 -134 37 -41 9 -81 19 -88 21 -9 2 1 24 29 65 60 89 89 199 56 212 -8 3 -33 -4 -57 -14 -38 -17 -45 -18 -58 -5 -13 12 -12 20 2 62 14 42 22 114 12 114 -2 0 -23 -7 -46 -15 -54 -19 -116 -19 -170 0 -23 8 -44 15 -47 15 -12 0 -25 -71 -38 -217 -11 -133 -19 -175 -37 -212 -31 -62 -56 -62 -79 -1 -15 41 -20 45 -55 48 -46 4 -64 -15 -64 -69 0 -60 -11 -99 -32 -110 -26 -14 -43 1 -79 73 -41 81 -77 77 -126 -13 -24 -45 -53 -69 -84 -69 -6 0 -24 30 -41 66 -27 59 -31 78 -32 158 -1 50 1 120 4 156 5 65 5 65 -23 68 -15 2 -42 -6 -61 -17 -18 -12 -49 -21 -69 -21 -33 0 -37 3 -46 38 -6 20 -11 46 -11 57 0 34 -28 65 -59 65 -40 0 -58 -26 -75 -104 -7 -37 -17 -70 -20 -74 -4 -3 -23 -5 -42 -3 -33 2 -42 -4 -127 -92 -73 -75 -101 -97 -135 -106 -50 -14 -116 -5 -108 15 22 56 26 96 14 122 -18 37 -40 38 -81 3 -48 -43 -73 -41 -88 7 -11 38 -8 208 5 247 5 16 -1 25 -28 42 -45 29 -68 74 -69 136 l-1 49 -43 -7 c-50 -7 -77 5 -98 45 -21 40 -19 46 18 60 49 20 97 59 97 79 0 10 -18 54 -40 97 -22 43 -40 86 -40 95 0 25 45 39 108 33 31 -3 63 -1 70 4 16 11 52 205 52 280 0 30 -5 72 -12 93 -15 53 -73 119 -103 119 -24 0 -65 -41 -65 -65 0 -19 -34 -45 -58 -45 -16 0 -22 6 -22 23 0 13 -5 28 -11 34 -23 23 -5 57 44 80 52 25 59 44 26 79 -13 14 -23 41 -26 68 -6 52 -12 54 -89 35 -54 -14 -74 -2 -74 47 0 25 7 38 25 50 25 16 27 16 95 -31 55 -38 80 -49 121 -53 43 -4 55 -2 66 13 20 29 16 93 -13 173 l-27 72 45 48 c52 55 65 101 49 172 -5 25 -9 46 -7 47 2 2 27 -8 57 -22 30 -14 71 -25 92 -25 34 0 40 4 51 33 8 17 19 56 26 86 7 30 23 65 36 78 l23 23 43 -29 c39 -25 98 -51 119 -51 4 0 17 20 28 44 28 65 57 80 136 73 63 -6 65 -6 79 21 8 15 59 76 114 135 106 113 132 156 140 223 l4 41 42 -4 c26 -3 68 3 114 17 40 12 76 20 79 17 3 -4 -4 -22 -16 -42 -21 -36 -28 -80 -13 -89 4 -2 57 15 117 39 61 24 118 44 128 45 28 0 65 -44 78 -94 13 -51 19 -54 94 -34 39 11 47 10 62 -4 14 -15 14 -22 4 -61 -25 -86 30 -116 104 -57 21 17 50 30 65 30 24 0 29 -5 33 -32 3 -18 12 -51 20 -73 19 -51 55 -60 81 -20 35 53 74 50 128 -10 25 -30 32 -33 52 -23 13 5 34 28 46 50 21 38 71 78 97 78 9 0 9 -12 -2 -47 -13 -42 -13 -50 1 -70 21 -33 42 -29 86 18 21 22 43 37 48 34 18 -11 11 -54 -17 -105 -33 -60 -26 -70 53 -70 51 0 103 -25 76 -37 -20 -8 -42 -59 -42 -97 0 -41 6 -43 170 -71 133 -23 192 -39 244 -68 l45 -25 26 43 c32 55 70 85 108 85 27 0 29 2 24 29 -9 42 11 101 44 132 17 16 67 40 121 58 l91 31 49 -50 c74 -75 84 -75 175 8 123 110 118 103 103 166 -21 88 -9 150 53 278 60 122 79 188 56 188 -52 0 -321 -54 -372 -75 -76 -30 -76 -30 -70 -5 10 38 -6 69 -45 89 -21 11 -44 27 -51 35 -20 24 -57 19 -80 -10 -12 -15 -21 -32 -21 -39 0 -6 -9 -20 -20 -30 -20 -18 -21 -18 -41 4 -20 21 -27 22 -95 16 -40 -4 -85 -5 -98 -1 -38 9 -42 41 -11 78 26 30 79 128 73 133 -2 1 -12 7 -24 13 -12 6 -34 36 -50 67 -16 30 -33 55 -39 55 -5 0 -39 -14 -73 -30 -35 -17 -79 -30 -98 -30 -33 0 -34 1 -34 40 0 30 -15 69 -55 145 -49 94 -55 112 -55 165 l0 60 -38 0 c-21 0 -46 6 -56 13 -18 13 -17 15 13 36 53 38 74 93 69 175 -6 87 -44 167 -121 259 l-53 62 43 60 c94 129 133 155 235 155 109 0 165 38 302 203 65 78 102 105 181 127 37 11 82 31 101 45 l33 26 23 -48 c31 -64 61 -68 155 -19 79 41 123 52 149 38 10 -5 36 -45 59 -88 44 -85 78 -111 113 -86 87 63 119 67 114 16 -4 -41 15 -59 83 -79 67 -19 69 -30 25 -140 -34 -87 -37 -115 -13 -156 20 -33 53 -38 106 -15 42 17 78 55 140 144 28 40 63 80 78 88 30 15 101 18 134 5 14 -6 28 -2 44 11 35 27 155 61 220 62 l56 1 6 -50 c8 -66 24 -103 62 -143 57 -60 131 -90 340 -136 l108 -23 23 31 c37 49 46 72 46 115 0 35 -4 43 -31 56 -41 22 -56 14 -78 -39 -25 -57 -36 -62 -51 -26 -17 41 -44 55 -160 84 -140 34 -168 62 -144 142 19 65 49 116 109 190 77 94 145 185 145 193 0 4 -34 13 -76 19 -120 19 -194 68 -232 155 l-12 28 88 41 c172 82 212 128 212 244 l0 60 44 12 c52 14 84 50 116 132 12 30 28 66 37 79 l15 23 44 -50 c24 -28 63 -60 87 -71 50 -24 120 -27 157 -6 35 20 40 19 40 -11 0 -15 14 -51 31 -80 36 -64 58 -69 114 -24 50 40 75 40 75 0 0 -17 12 -53 26 -81 19 -39 29 -49 42 -44 37 15 132 18 163 5 18 -8 68 -44 111 -81 l80 -67 66 67 c44 44 104 90 174 131 59 35 129 82 155 105 l48 42 30 -21 c83 -58 92 -84 54 -166 -27 -58 -37 -151 -18 -166 8 -6 43 -21 77 -34 35 -13 66 -29 69 -36 2 -7 -7 -32 -21 -57 -30 -50 -33 -79 -11 -97 12 -10 29 -9 86 6 104 27 121 10 83 -86 -24 -60 -25 -209 -1 -262 24 -56 52 -65 127 -40 67 23 77 18 68 -32 -14 -70 30 -216 64 -216 10 0 61 41 113 91 107 101 141 120 226 121 32 0 63 6 69 12 5 7 28 50 51 96 57 117 101 160 163 160 34 0 109 -86 149 -172 l32 -69 52 4 c38 3 61 11 88 33 71 56 127 94 141 94 9 0 14 -12 14 -34 0 -45 40 -92 88 -106 20 -5 66 -10 102 -10 97 0 110 -6 110 -47 0 -20 -8 -57 -17 -84 -21 -58 -14 -75 38 -101 49 -26 116 -23 174 7 27 13 51 22 53 20 9 -8 14 -95 8 -127 -3 -18 -34 -81 -69 -140 -69 -115 -93 -192 -82 -260 l7 -40 47 7 c122 18 119 18 130 -4 16 -29 -33 -204 -68 -244 -25 -27 -27 -28 -56 -13 -17 9 -48 16 -71 16 l-41 0 -23 -76 c-13 -46 -34 -89 -51 -109 -28 -32 -31 -33 -57 -19 -33 17 -133 19 -150 2 -7 -7 -12 -37 -12 -67 0 -83 -7 -89 -71 -62 -66 29 -91 25 -209 -33 -72 -35 -105 -46 -142 -46 l-48 0 0 -35 c0 -43 20 -94 47 -117 10 -10 50 -34 88 -55 83 -46 115 -87 115 -149 l0 -44 -41 0 c-54 0 -73 -12 -141 -84 l-57 -60 -23 21 c-47 43 -122 73 -187 73 -102 0 -187 -41 -383 -187 l-88 -65 -31 26 c-17 14 -39 26 -49 26 -10 0 -52 -23 -93 -51 -42 -28 -84 -49 -93 -47 -10 2 -30 23 -44 48 -23 39 -32 46 -66 50 -56 8 -89 -6 -118 -50 -37 -56 -61 -59 -125 -16 -63 43 -136 66 -207 66 -50 0 -54 -2 -103 -55 -27 -31 -67 -83 -87 -116 l-37 -60 -23 22 c-21 19 -25 20 -69 7 -47 -13 -47 -14 -75 -88 -32 -88 -72 -169 -169 -340 -39 -69 -79 -144 -87 -167 l-17 -43 -67 0 c-51 0 -71 -4 -82 -17 -29 -33 -86 -147 -103 -206 -21 -73 -22 -182 -1 -230 19 -46 50 -49 96 -10 l32 27 18 -24 c21 -28 30 -73 30 -157 0 -34 4 -65 10 -68 5 -3 36 -10 67 -15 94 -16 101 -48 43 -193 -37 -94 -39 -141 -6 -162 33 -22 62 -12 158 51 44 30 91 54 104 54 l23 0 -6 -113 c-7 -131 2 -171 53 -227 l34 -38 -36 -73 c-48 -97 -107 -278 -133 -409 -55 -278 -45 -504 28 -648 43 -84 44 -74 37 254 -9 397 -10 389 119 738 20 55 39 128 42 163 4 48 10 64 24 68 10 3 31 30 48 59 21 38 39 57 61 64 47 17 55 9 56 -63 2 -77 31 -144 80 -181 45 -35 83 -26 149 37 49 46 107 79 140 79 12 0 15 -15 15 -84 l0 -84 35 -27 c20 -14 48 -44 62 -66 23 -36 25 -46 20 -104 -8 -86 -59 -235 -145 -425 -90 -199 -129 -312 -102 -295 15 9 12 -3 -10 -64 -12 -29 -19 -55 -16 -58 8 -9 135 152 191 243 l58 92 68 16 c89 20 181 63 349 163 148 88 255 144 312 162 42 14 36 -9 63 246 18 173 49 323 69 344 8 8 36 26 62 40 31 17 51 36 57 54 5 16 7 30 5 33 -3 2 -29 -1 -58 -7 -43 -9 -63 -21 -101 -59 -62 -63 -83 -130 -109 -362 -11 -97 -24 -187 -29 -201 -7 -18 -24 -30 -59 -41 -27 -9 -123 -58 -213 -108 -150 -83 -276 -145 -338 -163 -27 -8 -28 -18 13 138 32 123 48 286 38 396 l-8 84 37 47 c40 51 96 98 148 125 41 21 54 8 47 -45 -19 -128 -19 -150 -2 -150 29 0 100 39 156 86 91 75 135 102 171 106 65 6 43 68 -25 68 -16 0 -60 -16 -97 -35 -88 -46 -109 -46 -109 -1 0 18 -5 48 -11 66 -12 32 -12 32 -61 27 -70 -9 -103 -31 -179 -122 -63 -75 -115 -115 -149 -115 -26 0 -50 54 -51 112 -3 140 -49 159 -148 60 -68 -68 -107 -92 -148 -92 -58 0 -73 26 -73 130 0 126 -19 160 -89 160 -37 0 -71 -28 -115 -94 -46 -70 -104 -122 -120 -106 -7 7 -11 59 -12 141 -1 138 -9 168 -50 189 -29 16 -67 2 -133 -50 -60 -48 -89 -63 -107 -56 -20 8 -17 34 11 110 15 40 25 87 25 119 l0 53 -80 48 -80 47 0 61 c0 83 -25 124 -117 189 -40 29 -73 57 -73 63 1 27 41 96 66 113 41 26 97 20 191 -21 45 -20 86 -36 92 -36 16 0 13 54 -9 150 -26 116 -26 169 3 211 20 30 28 34 63 32 21 -1 55 -5 75 -8 58 -11 64 6 46 122 -16 105 -10 148 22 177 19 17 21 17 63 -7 78 -45 85 -44 93 10 3 26 18 67 31 90 67 117 258 136 385 40 l44 -34 17 37 c19 39 62 76 101 85 32 8 45 -13 58 -98 13 -78 31 -107 67 -107 37 0 66 31 92 103 12 32 32 64 44 72 20 13 28 11 103 -28 l81 -42 59 56 c32 30 74 67 94 82 l37 28 72 -17 c77 -17 133 -55 144 -97 5 -20 10 -22 55 -19 27 2 75 -4 107 -13 50 -15 68 -28 151 -112 l94 -96 72 5 c89 6 127 25 237 117 97 82 147 109 219 118 49 6 51 7 51 37 0 88 61 265 120 352 26 37 36 45 54 39 11 -3 59 -17 106 -30 47 -13 95 -27 107 -30 17 -6 38 6 95 50 73 57 146 100 155 92 2 -3 0 -22 -6 -44 -6 -21 -11 -86 -11 -145 l0 -107 46 -27 c55 -32 112 -35 167 -9 21 10 88 65 149 123 113 106 202 162 259 162 21 0 28 -6 32 -29 6 -30 26 -42 110 -62 86 -21 97 -76 47 -224 -56 -164 -39 -203 82 -192 35 3 73 9 86 13 20 6 22 3 22 -29 0 -28 7 -40 31 -59 74 -56 81 -67 74 -106 -9 -49 -41 -106 -108 -188 -56 -71 -97 -139 -97 -162 0 -7 15 -28 34 -45 29 -28 36 -46 56 -132 32 -145 38 -162 71 -190 23 -19 42 -25 75 -25 49 0 73 10 165 70 33 21 76 44 94 50 29 10 36 9 53 -8 11 -11 25 -21 31 -23 9 -3 8 -14 -4 -41 -18 -45 -20 -102 -2 -115 6 -6 42 -20 78 -32 108 -36 108 -36 70 -202 -18 -77 -43 -171 -55 -207 -22 -64 -24 -67 -60 -73 -60 -10 -88 -38 -138 -139 -57 -114 -83 -150 -106 -150 -10 0 -55 18 -99 39 -94 46 -79 52 -162 -72 -29 -43 -54 -77 -56 -75 -2 2 -24 31 -49 65 -48 66 -87 93 -134 93 -37 0 -57 -22 -87 -101 -14 -35 -32 -69 -41 -75 -21 -17 -53 -6 -96 32 -40 36 -71 48 -109 42 -33 -4 -70 -99 -76 -198 -5 -71 -4 -77 22 -108 57 -68 89 -76 285 -77 196 -1 239 -10 220 -46 -9 -15 -8 -33 1 -70 l13 -49 48 0 c60 0 99 16 164 68 l52 41 4 -50 c3 -28 12 -58 21 -66 14 -14 20 -13 59 10 64 37 123 106 219 252 96 146 163 214 242 243 l52 20 3 -27 c2 -14 7 -38 13 -52 9 -23 15 -26 67 -27 31 0 86 -10 122 -21 36 -11 81 -23 100 -26 l35 -6 0 -85 c0 -73 3 -88 20 -100 39 -29 114 -1 213 81 55 46 143 87 156 74 13 -13 40 -388 39 -541 l-1 -177 31 -14 c18 -8 47 -20 65 -27 18 -7 39 -22 47 -33 12 -17 11 -23 -5 -46 -11 -14 -25 -59 -31 -99 -15 -92 -6 -115 53 -134 39 -13 43 -18 46 -50 5 -62 -72 -129 -167 -144 -51 -8 -58 -20 -127 -191 -57 -145 -87 -202 -129 -246 -30 -32 -28 -31 -67 -11 -38 20 -79 14 -168 -22 -36 -14 -84 -28 -108 -29 -24 -2 -46 -5 -49 -8 -2 -3 -16 -50 -29 -104 -30 -123 -47 -147 -104 -151 -39 -3 -46 0 -84 41 -50 53 -74 67 -119 67 -41 0 -59 -18 -97 -98 -15 -33 -33 -62 -38 -66 -20 -12 -43 7 -68 56 l-25 49 -29 -21 c-48 -34 -88 -35 -182 -5 l-84 28 -95 -63 c-164 -109 -219 -176 -219 -267 1 -63 32 -133 60 -133 11 0 39 12 61 27 34 22 42 24 50 12 12 -20 11 -40 -6 -89 -14 -39 -14 -46 0 -67 21 -32 68 -30 130 7 31 19 64 30 88 30 l37 0 0 -84 0 -84 30 -7 c40 -9 78 0 178 41 75 31 149 43 165 28 8 -8 -14 -39 -117 -169 -102 -128 -138 -203 -144 -301 -3 -45 -9 -74 -16 -74 -6 0 -40 18 -76 40 -88 54 -140 55 -202 5 -72 -59 -131 -95 -153 -95 -15 0 -27 13 -43 45 -30 62 -85 120 -138 146 l-45 21 -35 -36 c-21 -22 -44 -36 -59 -36 -14 0 -63 16 -109 35 -121 50 -131 48 -145 -22 -6 -31 -11 -92 -11 -135 l0 -78 -70 0 c-64 0 -70 -2 -70 -21 0 -11 -7 -52 -16 -92 -19 -80 -55 -127 -98 -127 -14 0 -68 13 -119 30 -100 32 -177 39 -196 17 -6 -8 -16 -49 -22 -93 -12 -83 -31 -131 -54 -140 -7 -3 -35 6 -61 19 -27 14 -73 32 -103 41 -53 16 -54 16 -103 -11 -28 -15 -72 -51 -99 -81 -41 -45 -51 -52 -68 -43 -11 6 -60 11 -109 11 -104 0 -102 -1 -111 100 l-6 65 -40 6 c-31 5 -48 16 -75 49 -88 108 -115 130 -157 130 -31 0 -50 -8 -84 -35 -24 -19 -50 -35 -58 -35 -7 0 -31 16 -53 36 -54 49 -97 65 -174 65 l-64 1 0 29 c0 41 -24 84 -81 144 -46 48 -79 107 -79 138 0 10 17 16 55 20 177 18 262 135 330 455 l22 103 -53 -7 c-51 -6 -53 -5 -96 34 -77 72 -118 73 -158 5 -28 -46 -60 -83 -72 -83 -5 0 -35 25 -67 55 -49 46 -64 55 -95 55 -44 0 -95 -20 -118 -46 -9 -11 -35 -53 -58 -94 -23 -41 -54 -87 -68 -102 l-25 -27 -36 28 c-81 64 -104 65 -132 8 -50 -99 -96 -115 -123 -42 -10 25 -37 72 -61 104 -72 97 -85 131 -85 213 0 90 -15 118 -64 118 -66 0 -80 -50 -50 -176 9 -41 13 -83 9 -108 -10 -61 -57 -152 -119 -231 -208 -265 -234 -344 -185 -545 34 -137 39 -288 28 -799 -14 -615 0 -882 61 -1138 44 -188 127 -343 235 -441 60 -55 149 -107 165 -97 15 9 12 70 -6 114 -10 25 -54 76 -124 144 -118 114 -141 150 -171 265 -45 174 -49 259 -49 1104 l0 797 -26 81 c-44 141 -33 211 50 318 24 31 67 98 95 148 53 96 117 164 152 164 49 0 72 -35 99 -147 6 -29 23 -64 36 -79 25 -26 25 -26 46 -8 11 11 31 40 44 66 54 106 136 120 160 26 9 -39 13 -43 39 -41 52 4 109 80 160 215 19 51 79 128 99 128 23 0 56 -46 72 -99 35 -120 103 -120 172 1 36 65 59 86 99 94 l32 6 -2 -173 c-2 -214 -17 -252 -97 -259 -45 -4 -50 0 -56 41 -7 42 -29 72 -47 66 -7 -2 -19 -25 -28 -51 -10 -26 -42 -90 -73 -144 -63 -111 -76 -142 -76 -182 0 -36 16 -41 65 -23 77 29 90 28 118 -9 39 -51 59 -124 61 -215 1 -77 2 -82 24 -88 15 -4 38 2 60 14 111 60 118 60 171 -1 21 -24 35 -52 38 -78 5 -37 8 -40 38 -40 34 0 55 17 113 89 41 51 64 53 81 6 12 -35 32 -58 133 -153 61 -57 85 -114 75 -177 -5 -33 -4 -35 21 -35 14 0 55 18 91 39 63 38 89 46 139 43 18 -2 22 -8 22 -34 1 -77 59 -154 157 -207 42 -23 53 -26 57 -14 13 33 4 72 -26 118 -69 102 -71 115 -34 173 39 62 61 76 117 75 39 -1 63 -9 109 -37 33 -21 76 -40 95 -43 31 -5 34 -3 40 23 32 154 48 195 83 227 20 18 22 18 104 -18 103 -44 158 -54 192 -32 13 9 48 50 76 91 39 56 63 80 95 96 48 23 48 22 70 130 8 41 22 99 30 128 14 47 18 52 45 52 29 0 47 -17 93 -90 19 -29 29 -35 57 -35 33 0 37 4 63 58 15 32 35 61 44 64 23 9 56 -36 93 -127 17 -41 39 -90 48 -107 l17 -33 35 18 c24 14 46 41 78 98 51 93 65 110 102 122 38 14 95 -13 168 -78 37 -33 74 -56 106 -65 70 -21 74 -20 81 23 26 158 90 309 225 537 50 83 90 156 90 162 0 6 -21 21 -46 33 -57 28 -108 23 -241 -25 -52 -19 -99 -35 -104 -35 -5 0 -9 43 -9 95 l0 95 -37 0 c-21 0 -66 -13 -101 -30 -35 -17 -80 -30 -99 -30 -33 0 -35 2 -29 25 4 14 11 69 16 123 12 118 22 154 55 198 21 27 32 33 48 29 34 -10 87 -71 87 -100 0 -30 6 -31 125 -6 103 21 166 48 237 102 l50 37 81 -39 c64 -31 92 -39 137 -39 l55 0 23 59 c12 32 25 82 29 110 5 46 8 51 30 51 28 0 69 20 137 67 26 18 57 33 68 33 11 0 42 -16 69 -36 28 -21 66 -38 88 -41 l38 -5 32 93 c18 52 58 150 88 219 30 69 64 149 75 178 19 49 23 52 55 52 19 0 63 7 98 16 55 14 65 20 65 38 0 11 14 68 30 126 17 58 30 117 30 131 0 38 -35 77 -79 89 -37 10 -39 11 -31 43 4 18 20 53 35 77 32 51 45 131 25 155 -7 8 -43 24 -81 35 -38 12 -69 25 -69 31 0 6 18 27 40 46 55 49 53 73 -11 140 -55 59 -56 59 -23 145 20 50 19 57 -21 211 -18 67 -15 111 9 168 10 24 -67 52 -132 48 l-49 -4 14 32 c7 18 13 35 13 39 0 13 -127 -3 -180 -23 -30 -11 -71 -26 -90 -33 -19 -8 -64 -15 -99 -18 l-63 -4 6 41 c3 23 9 59 12 81 13 84 -40 94 -109 21 -26 -27 -58 -51 -72 -53 -14 -3 -25 -4 -25 -3 0 1 11 29 25 63 29 72 30 85 9 106 -25 25 -39 20 -106 -43 -35 -32 -73 -63 -85 -70 -30 -15 -72 -14 -107 4 -31 16 -45 8 -46 -23 0 -7 -12 -38 -27 -68 -40 -82 -131 -162 -244 -215 -52 -24 -144 -69 -205 -99 l-111 -56 -41 36 c-22 20 -81 54 -131 75 -72 31 -90 43 -84 55 4 8 9 58 11 110 2 52 8 100 14 107 25 31 61 14 133 -61 56 -59 79 -76 110 -82 49 -9 60 5 69 88 8 69 20 98 40 98 7 0 43 -20 78 -44 36 -23 80 -48 97 -54 l32 -11 23 52 c13 29 31 75 40 102 40 120 100 175 192 175 l42 0 52 123 c83 198 102 272 108 424 4 132 4 133 -19 141 -13 5 -39 5 -59 1 -63 -15 -89 -11 -101 15 -19 40 -1 77 62 136 46 43 61 64 66 93 6 42 6 42 -61 22 -68 -21 -80 -19 -121 16 -42 37 -36 40 -150 -77 -69 -71 -88 -84 -137 -99 -87 -25 -100 -20 -122 45 -16 50 -17 62 -6 130 26 150 27 161 18 166 -6 4 -25 -2 -44 -12 -26 -14 -36 -16 -45 -7 -9 9 -3 25 28 65 22 29 49 69 61 88 33 57 112 262 112 295 0 6 -25 25 -55 43 -63 38 -78 59 -77 114 1 38 1 38 -39 38 -22 0 -61 -11 -89 -25 -63 -32 -84 -33 -77 -2 27 119 38 191 47 304 5 73 13 150 16 173 l7 41 -29 -11 c-16 -6 -42 -24 -59 -39 -46 -42 -77 -61 -103 -61 -22 0 -24 3 -19 38 3 20 9 51 12 68 5 21 2 34 -9 43 -21 18 -76 -11 -171 -90 -40 -32 -75 -59 -78 -59 -4 0 -7 29 -7 65 0 38 -4 65 -10 65 -30 0 -95 -83 -148 -189 -60 -120 -97 -162 -160 -181 -29 -8 -37 -5 -65 20 -31 28 -32 30 -32 117 0 48 4 127 9 176 l8 87 -41 0 c-56 0 -87 -18 -143 -83 -47 -54 -96 -84 -122 -74 -8 3 -16 28 -20 61 -8 64 -21 78 -62 67 -21 -5 -35 -19 -51 -54 -31 -65 -52 -62 -97 12 -44 72 -100 123 -129 119 -18 -2 -29 -27 -70 -152 -51 -156 -70 -271 -60 -358 l6 -48 -51 1 c-64 2 -96 -20 -167 -115 -89 -119 -137 -156 -206 -156 -23 0 -46 17 -115 86 -100 101 -150 127 -241 128 -50 1 -63 4 -63 16 0 29 -30 58 -77 75 -94 33 -103 38 -103 45 0 13 59 30 102 30 45 0 78 -16 163 -75 101 -71 103 -72 120 -31 28 67 68 99 204 166 148 72 145 68 115 171 -21 72 -57 133 -116 196 l-49 51 43 41 c41 39 68 51 68 32 0 -16 68 -41 112 -41 40 1 45 4 70 45 37 61 70 80 138 80 30 0 67 -4 81 -8 23 -7 27 -5 37 20 6 15 14 53 18 83 7 60 26 114 43 125 7 3 31 -5 56 -19 55 -33 110 -35 126 -5 20 38 58 160 70 222 18 101 28 261 17 274 -6 7 -28 18 -50 23 -45 13 -78 42 -78 69 0 10 36 73 80 141 44 68 80 127 80 132 0 6 -10 18 -22 28 -24 19 -26 39 -13 175 6 69 5 82 -9 94 -29 24 -90 -2 -125 -53 -45 -65 -86 -96 -128 -96 l-35 0 7 118 c9 149 11 147 -130 148 -55 0 -107 4 -114 8 -25 16 -29 50 -10 99 26 65 24 74 -13 93 -18 9 -52 34 -75 55 -24 22 -53 39 -66 39 -20 0 -25 -8 -39 -71 -31 -128 -78 -196 -150 -214 -24 -6 -28 -4 -28 13 0 11 9 41 21 66 25 57 20 79 -15 70 -55 -13 -86 22 -86 98 l0 40 -47 -8 c-61 -11 -176 -11 -229 -1 -41 8 -41 8 -47 -25 -3 -18 -15 -59 -27 -91 -20 -52 -25 -58 -44 -52 -11 4 -37 9 -57 12 -35 5 -36 4 -54 -44 -38 -104 -99 -175 -180 -209 -19 -7 -36 -14 -39 -14 -2 0 -9 24 -16 53 -6 28 -18 71 -26 95 -13 36 -20 42 -44 42 -15 0 -44 -7 -63 -15 -20 -8 -50 -15 -66 -15 -25 0 -30 5 -36 31 -10 43 1 120 30 215 40 129 38 134 -69 134 -36 0 -70 6 -80 13 -17 12 -17 16 -3 43 8 16 22 53 30 81 15 51 15 53 -6 68 -27 19 -50 19 -127 -1 -34 -8 -64 -14 -66 -11 -3 2 11 40 30 84 57 134 58 129 -24 216 -49 53 -90 85 -132 107 -71 35 -69 36 -120 -54 -45 -80 -57 -86 -101 -53 -32 25 -36 25 -50 9 -8 -9 -32 -51 -52 -92 -43 -86 -77 -135 -106 -150 -16 -9 -27 -5 -61 24 -65 56 -115 76 -190 76 -40 0 -69 5 -75 13 -6 6 -14 41 -17 77 -13 111 -30 121 -131 70 -33 -16 -65 -30 -72 -30 -7 0 -17 17 -22 38 -6 20 -17 63 -26 95 -9 34 -21 57 -29 57 -8 0 -46 -13 -84 -30 -74 -31 -140 -39 -146 -17 -2 6 -8 30 -12 52 -9 40 -9 40 -64 46 -30 3 -78 9 -105 13 -44 7 -53 5 -69 -13z m4735 -5530 c24 -16 66 -51 93 -79 48 -50 48 -50 26 -62 -46 -24 -163 15 -196 66 -17 25 -21 74 -9 94 11 17 39 11 86 -19z m1769 -12 c16 -28 8 -43 -41 -79 -57 -41 -71 -39 -67 7 2 30 10 42 43 65 48 33 51 33 65 7z" />
        <path d="M5229 7721 c-39 -29 -115 -105 -182 -183 -63 -73 -134 -148 -157 -167 l-43 -34 -18 22 c-10 12 -25 55 -34 96 -27 119 -78 165 -90 82 -18 -118 47 -261 135 -297 30 -13 30 -12 157 120 70 73 152 163 183 201 55 67 139 209 123 209 -4 0 -38 -22 -74 -49z" />
        <path d="M5305 7490 c-19 -37 -48 -68 -118 -124 -98 -78 -138 -123 -163 -182 l-15 -36 28 6 c121 30 228 126 307 276 39 74 46 94 35 101 -30 19 -49 9 -74 -41z" />
        <path d="M4541 7370 c-14 -67 -14 -94 3 -135 17 -40 42 -55 90 -55 50 0 56 31 20 101 -17 34 -27 70 -27 97 0 42 0 42 -38 42 -37 0 -38 -1 -48 -50z" />
        <path d="M5533 7303 c-10 -25 17 -63 78 -110 77 -58 85 -81 65 -178 -9 -43 -16 -91 -16 -109 0 -36 24 -76 45 -76 36 0 67 219 46 322 -22 103 -87 168 -168 168 -31 0 -45 -5 -50 -17z" />
        <path d="M3635 7211 c-27 -10 -84 -35 -125 -55 -55 -26 -88 -36 -125 -36 -47 -1 -52 -4 -88 -45 -42 -49 -57 -88 -48 -122 l6 -22 65 23 c36 12 113 52 170 88 107 67 190 112 195 106 12 -14 25 -51 25 -69 0 -12 -13 -63 -29 -113 -17 -54 -27 -102 -24 -118 5 -26 9 -28 55 -28 47 0 53 3 111 59 69 65 101 85 123 77 22 -9 16 -56 -16 -124 -33 -69 -39 -122 -16 -122 33 0 74 24 128 76 33 31 65 54 74 52 35 -7 39 -33 19 -125 -23 -104 -24 -148 -4 -169 8 -8 46 -23 83 -34 96 -27 100 -31 93 -110 -12 -133 -77 -274 -165 -356 -61 -58 -78 -63 -147 -48 -33 8 -83 17 -111 20 -47 6 -53 4 -67 -17 -9 -13 -18 -40 -22 -60 l-7 -36 129 -12 c70 -7 152 -11 182 -9 l53 3 65 118 c38 69 87 141 117 173 l51 54 55 -15 c37 -10 104 -15 205 -15 l150 0 53 -107 c108 -222 210 -310 300 -259 l23 12 -38 26 c-70 47 -130 119 -193 232 -35 61 -75 131 -90 156 l-27 45 -144 0 c-157 0 -189 9 -230 65 -20 26 -46 136 -36 147 4 3 53 -12 109 -34 124 -49 223 -67 291 -54 27 5 53 13 59 19 15 15 -7 218 -33 312 -21 77 -85 220 -99 220 -4 0 -10 -10 -14 -22 -12 -48 -5 -101 28 -196 18 -54 37 -121 41 -148 6 -48 5 -52 -21 -69 -53 -35 -154 -3 -351 109 -62 36 -63 36 -63 12 0 -34 -30 -56 -78 -56 -36 0 -44 4 -58 31 -14 29 -14 38 6 136 12 60 19 117 15 134 -14 64 -60 75 -141 34 -27 -14 -52 -25 -56 -25 -5 0 -8 21 -8 48 0 26 -5 64 -11 85 -9 33 -13 37 -43 37 -33 0 -116 -50 -116 -70 0 -9 -80 -60 -95 -60 -8 0 -5 28 14 149 5 35 7 77 4 92 -5 27 -8 29 -57 29 -28 -1 -73 -9 -101 -19z" />
        <path d="M5257 7224 c-10 -10 3 -56 21 -77 9 -9 41 -29 73 -43 32 -15 65 -34 74 -44 20 -22 55 -229 55 -320 -1 -36 -7 -83 -15 -105 -8 -21 -12 -41 -9 -44 10 -10 64 54 84 100 76 177 -2 443 -152 520 -36 18 -118 26 -131 13z" />
        <path d="M4993 7054 c3 -38 13 -121 22 -184 16 -118 14 -165 -12 -260 l-14 -56 60 -114 c69 -131 114 -262 138 -397 9 -51 20 -93 23 -93 4 0 46 -30 95 -66 108 -82 177 -119 249 -134 63 -13 83 -33 131 -130 37 -75 70 -117 107 -136 l31 -16 -6 55 c-15 148 -111 261 -300 351 -62 30 -128 61 -147 69 -33 13 -38 21 -60 93 -32 104 -104 281 -179 439 l-61 127 21 61 c51 152 10 385 -78 442 l-26 17 6 -68z" />
        <path d="M5848 6778 c-6 -88 -21 -119 -136 -287 -48 -70 -96 -152 -109 -187 -26 -74 -38 -173 -26 -228 l8 -39 29 25 c25 22 29 33 36 104 9 98 26 133 143 289 115 154 150 224 150 310 0 34 -4 68 -7 74 -4 6 -24 11 -45 11 l-38 0 -5 -72z" />
        <path d="M8580 6263 c-6 -27 -32 -100 -57 -163 -52 -132 -63 -206 -40 -263 18 -43 27 -44 112 -18 124 38 209 93 249 161 l19 33 -40 -6 c-22 -4 -69 -20 -104 -37 -36 -16 -86 -33 -112 -36 -42 -6 -47 -5 -47 13 0 49 24 141 59 226 60 143 59 137 13 137 -39 0 -40 -1 -52 -47z" />
        <path d="M6119 6238 c-55 -76 -138 -258 -165 -363 -22 -88 -25 -115 -21 -220 3 -97 9 -132 28 -180 l24 -60 3 45 c6 112 34 304 56 391 26 103 64 190 126 288 42 67 47 89 30 122 -17 31 -47 23 -81 -23z" />
        <path d="M10070 6211 c-32 -61 14 -130 106 -157 48 -14 98 -11 109 5 7 13 -129 140 -167 156 -35 14 -38 14 -48 -4z" />
        <path d="M9241 5889 c-172 -34 -388 -148 -446 -235 -15 -23 -14 -26 14 -67 16 -23 88 -107 160 -186 187 -205 236 -287 261 -434 l12 -65 51 -14 c31 -7 110 -13 192 -13 157 0 234 17 274 58 l22 25 -32 11 c-19 6 -103 11 -203 11 l-171 0 -41 63 c-23 34 -68 109 -99 167 -122 221 -204 317 -315 369 l-60 29 37 32 c44 39 107 68 228 105 125 38 204 76 244 119 l35 36 -60 -1 c-32 -1 -79 -5 -103 -10z" />
        <path d="M3771 5466 c13 -98 38 -144 91 -172 40 -21 51 -6 44 58 -9 85 -68 168 -121 168 -21 0 -21 -3 -14 -54z" />
        <path d="M3516 5468 c-35 -49 -13 -89 99 -178 36 -29 65 -56 65 -61 0 -5 -52 -78 -115 -163 -135 -182 -210 -295 -258 -391 -34 -68 -60 -145 -53 -153 8 -7 61 26 88 55 29 30 51 83 62 148 6 32 13 43 37 54 50 22 95 75 161 188 80 137 114 173 162 173 48 0 106 25 106 45 0 8 -6 34 -12 56 l-13 41 -50 -5 c-27 -2 -58 -8 -68 -12 -13 -6 -20 1 -33 31 -35 86 -58 128 -91 160 -39 39 -66 43 -87 12z" />
        <path d="M8325 5419 c-124 -87 -421 -228 -640 -305 -84 -30 -126 -94 -70 -108 35 -9 159 12 240 41 97 35 150 63 259 137 88 60 97 63 139 59 39 -5 60 1 144 41 191 89 251 58 435 -219 47 -71 99 -139 114 -151 24 -17 86 -44 101 -44 2 0 -9 19 -25 43 -16 23 -60 96 -97 162 -124 220 -188 294 -299 346 -64 30 -147 50 -200 48 -20 -1 -56 -19 -101 -50z" />
        <path d="M4129 5029 c-139 -20 -269 -88 -362 -188 -67 -73 -121 -155 -227 -346 -46 -82 -92 -163 -103 -178 -10 -16 -17 -31 -13 -34 12 -13 97 21 136 54 50 43 78 90 130 223 55 136 74 173 115 219 48 53 129 86 270 111 159 28 217 60 227 125 3 18 -3 20 -57 21 -33 1 -85 -2 -116 -7z" />
        <path d="M7635 4843 c-56 -10 -69 -16 -107 -51 -29 -27 -56 -68 -93 -147 -52 -111 -96 -175 -120 -175 -7 0 -24 9 -38 20 -33 26 -55 25 -66 -2 -42 -112 -101 -325 -101 -368 0 -49 22 -110 39 -110 4 0 16 37 26 83 10 45 24 99 32 120 19 47 66 87 103 87 27 0 34 9 87 111 32 60 81 147 108 192 l50 82 6 -50 c7 -62 17 -85 35 -85 36 0 95 36 159 98 87 84 104 98 133 106 21 7 22 6 22 -71 0 -83 14 -126 43 -131 10 -2 47 22 88 57 83 72 116 91 167 94 36 2 38 0 66 -55 16 -32 38 -60 49 -64 12 -4 52 10 112 41 59 29 121 52 172 62 73 14 87 14 149 0 38 -8 77 -19 87 -22 14 -6 17 -1 17 27 0 40 -28 75 -68 83 -15 4 -36 8 -47 10 -30 6 -152 -13 -280 -44 l-115 -28 0 24 c0 27 -17 64 -34 75 -17 12 -95 9 -119 -4 -12 -6 -43 -29 -69 -51 -35 -29 -59 -41 -93 -44 l-45 -6 0 72 0 71 -40 0 c-54 0 -105 -22 -162 -71 -26 -22 -63 -46 -83 -55 l-35 -14 0 64 c0 69 -3 75 -35 69z" />
      </g>
    </svg>
  );
};
