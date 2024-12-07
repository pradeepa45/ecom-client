import {
  Calling02Icon,
  Location04Icon,
  MailAtSign02Icon,
} from "hugeicons-react";

import ContactForm from "@/components/contact/form";
import {
  CONTACT_NUMBER,
  CUSTOMER_SERVICE_EMAIL,
  OFFICE_ADDRESS,
} from "@/constants";

export default function ContactPage() {
  return (
    <div className="flex gap-4">
      <div className="flex flex-col basis-1/3 gap-12">
        <div className="flex justify-start gap-4 items-center">
          <Location04Icon size={48} />
          <div className="flex-col flex items-start w-fit">
            <p className="text-2xl font-semibold">Come meet us</p>
            <p>{OFFICE_ADDRESS}</p>
          </div>
        </div>
        <div className="flex justify-start gap-4 items-center">
          <MailAtSign02Icon size={48} />
          <div className="flex-col flex items-start w-fit">
            <p className="text-2xl font-semibold">Chat with us</p>
            <p>{CUSTOMER_SERVICE_EMAIL}</p>
          </div>
        </div>
        <div className="flex justify-start gap-4 items-center">
          <Calling02Icon size={48} />
          <div className="flex-col flex items-start w-fit">
            <p className="text-2xl font-semibold">Talk to us</p>
            <p>{CONTACT_NUMBER}</p>
          </div>
        </div>
      </div>
      <div className="grow p-4 rounded-lg border">
        <ContactForm />
      </div>
    </div>
  );
}
