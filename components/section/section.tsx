import { clsx } from "clsx";

export type SectionProps = React.ComponentProps<"section"> & {
  className?: string;
  children: React.ReactNode;
  HeaderComponent: React.ReactNode;
};

export const Section: React.FC<SectionProps> = ({
  children,
  HeaderComponent,
  ...otherProps
}): React.JSX.Element => {
  return (
    <section
      {...otherProps}
      className={clsx(otherProps.className, "container flex flex-col")}
    >
      {/* Header */}
      {HeaderComponent}

      {children}
    </section>
  );
};
