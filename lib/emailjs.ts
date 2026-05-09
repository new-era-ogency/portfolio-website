import emailjs from "@emailjs/browser";

export interface BookingData {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: number;
  notes?: string;
}

/**
 * Sends a reservation request to the venue inbox via EmailJS.
 * Configure the restaurant's service in the EmailJS dashboard, then set:
 * - NEXT_PUBLIC_EMAILJS_SERVICE_ID
 * - NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
 * - NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
 *
 * Template variables expected (map these in the EmailJS template UI):
 * {{to_name}}, {{from_name}}, {{from_email}}, {{phone}}, {{booking_date}},
 * {{booking_time}}, {{guests}}, {{notes}}, {{reply_to}}
 */
export async function sendMehanaManastiraBooking(data: BookingData): Promise<void> {
  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

  if (!serviceId || !templateId || !publicKey) {
    throw new Error(
      "EmailJS is not configured. Add NEXT_PUBLIC_EMAILJS_* variables for Mehana Manastira.",
    );
  }

  const templateParams = {
    to_name: "Mehana Manastira Sveti Vlas",
    from_name: data.name,
    from_email: data.email,
    phone: data.phone,
    booking_date: data.date,
    booking_time: data.time,
    guests: data.guests.toString(),
    notes: data.notes?.trim() || "—",
    reply_to: data.email,
    venue: "Mehana Manastira Sveti Vlas · Dinevi Marina",
  };

  await emailjs.send(serviceId, templateId, templateParams, { publicKey });
}
