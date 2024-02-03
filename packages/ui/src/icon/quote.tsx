import { cn } from "@nexus/utils";

export const Quote: React.FC<{ color?: string; className?: string }> = ({
  className,
}) => (
  <svg
    width="24"
    height="19"
    viewBox="0 0 24 19"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={cn(className)}
  >
    <path
      d="M10.271 1.38452L9.40723 0.0563965C3.43066 4.07371 0.110352 8.95483 0.110352 12.9721C0.110352 16.8566 2.96635 18.6831 5.38991 18.6831C8.4446 18.6831 10.6025 16.0927 10.6025 13.3706C10.6025 11.0798 9.1416 9.12058 7.18235 8.38958C6.61816 8.18983 6.08691 8.02408 6.08691 7.06146C6.08691 5.83321 6.98366 4.00783 10.271 1.38452ZM23.4524 1.38452L22.5886 0.0563965C16.6779 4.07371 13.2917 8.95483 13.2917 12.9721C13.2917 16.8566 16.2136 18.6831 18.6372 18.6831C21.7248 18.6831 23.9167 16.0927 23.9167 13.3706C23.9167 11.0798 22.4229 9.12058 20.3967 8.38958C19.8325 8.18983 19.3342 8.02408 19.3342 7.06146C19.3342 5.83321 20.2639 4.00677 23.4514 1.38346L23.4524 1.38452Z"
      fill="white"
    />
  </svg>
);