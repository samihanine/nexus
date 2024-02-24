import { Muted } from "@nexus/ui";

export default function NotFound() {
  return (
    <div className="h-screen w-full flex-grow">
      <div className="flex h-full w-full items-center justify-center flex-col gap-5">
        <p className="text-medium text-7xl text-foreground text-center">404</p>
        <Muted className="text-center !text-lg text-muted-foreground">
          La propriété n'a pas été trouvée.
          <br /> Elle a peut-être été vendue.
        </Muted>
      </div>
    </div>
  );
}
