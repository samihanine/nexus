import { cn } from "@nexus/utils";

export const H1 = (props: React.ComponentPropsWithoutRef<"h1">) => (
  <h1
    {...props}
    className={cn(
      "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
      props.className
    )}
  />
);

export const H2 = (props: React.ComponentPropsWithoutRef<"h2">) => (
  <h2
    {...props}
    className={cn(
      "scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0",
      props.className
    )}
  />
);

export const H3 = (props: React.ComponentPropsWithoutRef<"h3">) => (
  <h3
    {...props}
    className={cn(
      "scroll-m-20 text-2xl font-semibold tracking-tight",
      props.className
    )}
  />
);

export const H4 = (props: React.ComponentPropsWithoutRef<"h4">) => (
  <h3
    {...props}
    className={cn(
      "scroll-m-20 text-xl font-semibold tracking-tight",
      props.className
    )}
  />
);

export const P = (props: React.ComponentPropsWithoutRef<"p">) => (
  <p
    {...props}
    className={cn("leading-7 [&:not(:first-child)]:mt-6", props.className)}
  />
);

export const Small = (props: React.ComponentPropsWithoutRef<"small">) => (
  <small
    {...props}
    className={cn("text-sm font-medium leading-none", props.className)}
  />
);

export const Muted = (props: React.ComponentPropsWithoutRef<"p">) => (
  <p
    {...props}
    className={cn("text-sm text-muted-foreground", props.className)}
  />
);

export function Blockquote(
  props: React.ComponentPropsWithoutRef<"blockquote">
) {
  return (
    <blockquote
      {...props}
      className={cn("mt-6 border-l-2 pl-6 italic", props.className)}
    />
  );
}

export const Ul = (props: React.ComponentPropsWithoutRef<"ul">) => (
  <ul
    {...props}
    className={cn("my-6 ml-6 list-disc [&>li]:mt-2", props.className)}
  />
);

export const Code = (props: React.ComponentPropsWithoutRef<"code">) => (
  <code
    {...props}
    className={cn(
      "relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold",
      props.className
    )}
  />
);
