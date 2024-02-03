import { cn } from "@nexus/utils";

export const RoundedArrowLeft: React.FC<{
  color?: string;
  className?: string;
}> = ({ className }) => (
  <svg
    width="49"
    height="50"
    viewBox="0 0 49 50"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={cn(className)}
  >
    <path
      fill-rule="currentColor"
      clip-rule="currentColor"
      d="M15.4986 26.6529L23.439 34.5806C23.829 34.9699 24.4621 34.9699 24.8531 34.5806C25.2431 34.1902 25.2431 33.5583 24.8531 33.1679L18.4121 26.7388C18.0972 26.4243 18.3202 25.8872 18.7661 25.8872H33.5586C34.1106 25.8872 34.5586 25.432 34.5586 24.8799V24.8769C34.5586 24.3249 34.1106 23.8906 33.5586 23.8906H18.7661C18.3202 23.8906 18.0972 23.3525 18.4121 23.038L24.8838 16.5769C25.2748 16.1876 25.2748 15.5547 24.8838 15.1653C24.4938 14.775 23.8602 14.775 23.4702 15.1653L15.1446 23.4763C14.3636 24.256 14.3636 25.5198 15.1446 26.2995L15.4986 26.6529Z"
      fill="currentColor"
    />
    <path
      d="M24.5588 49.0564C19.4517 49.0564 14.4757 47.4396 10.3439 44.4377C6.21218 41.4358 3.13683 37.2029 1.55864 32.3458C-0.0195465 27.4886 -0.0195465 22.2565 1.55864 17.3993C3.13683 12.5422 6.21218 8.30931 10.3439 5.30742C14.4757 2.30553 19.4517 0.68872 24.5588 0.688721C29.666 0.688721 34.642 2.30553 38.7737 5.30742C42.9055 8.30932 45.9808 12.5422 47.559 17.3993C49.1372 22.2565 49.1372 27.4886 47.559 32.3458L46.409 31.9721C47.9083 27.3578 47.9083 22.3873 46.409 17.773C44.9097 13.1587 41.9882 9.13748 38.063 6.28568C34.1378 3.43388 29.4106 1.89791 24.5588 1.89791C19.7071 1.89791 14.9798 3.43388 11.0547 6.28568C7.12952 9.13748 4.20793 13.1587 2.70865 17.773C1.20937 22.3873 1.20937 27.3578 2.70865 31.9721C4.20793 36.5864 7.12952 40.6076 11.0547 43.4594C14.9798 46.3112 19.7071 47.8472 24.5588 47.8472L24.5588 49.0564Z"
      fill="currentColor"
    />
  </svg>
);
