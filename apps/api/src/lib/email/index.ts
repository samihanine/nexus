type SendEmailProps = {
  to: string;
  subject: string;
  text: string;
  html: string;
  from: string;
};

export const sendEmail = async (props: SendEmailProps) => {};
