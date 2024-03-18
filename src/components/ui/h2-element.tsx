export const H2Element: React.FC<{ text: string; className?: string }> = ({
  text,
  className,
}) => (
  <h2
    className={`font-semibold leading-7 text-accent-600 text-balance ${className}`}
  >
    {text}
  </h2>
);

export const TitleElement: React.FC<{ text: string; className?: string }> = ({
  text,
  className,
}) => (
  <p
    className={`text-3xl font-bold tracking-tight sm:text-4xl text-balance ${className}`}
  >
    {text}
  </p>
);

export const DescriptionElement: React.FC<{
  text: string;
  className?: string;
}> = ({ text, className }) => (
  <div className={`leading-7 text-white font-light text-balance ${className}`}>
    {text}
  </div>
);
