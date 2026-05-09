"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useCallback, useMemo, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useI18n } from "@/components/i18n-provider";
import { PremiumDatePicker } from "@/components/premium-date-picker";
import { sendMehanaManastiraBooking } from "@/lib/emailjs";
import {
  createMehanaBookingSchema,
  type MehanaBookingFormValues,
} from "@/lib/validations";

type MehanaBookingFormProps = {
  onCursorCTAEnter: () => void;
  onCursorCTALeave: () => void;
};

export function MehanaBookingForm({
  onCursorCTAEnter,
  onCursorCTALeave,
}: MehanaBookingFormProps) {
  const { locale, messages } = useI18n();
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const schema = useMemo(
    () => createMehanaBookingSchema(messages.booking.errors),
    [messages.booking.errors],
  );

  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm<MehanaBookingFormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      date: "",
      time: "19:00",
      guests: 2,
      notes: "",
    },
  });

  const onSubmit = useCallback(
    async (data: MehanaBookingFormValues) => {
      setStatus("loading");
      try {
        await sendMehanaManastiraBooking(data);
        setStatus("success");
        reset({
          name: "",
          email: "",
          phone: "",
          date: "",
          time: "19:00",
          guests: 2,
          notes: "",
        });
      } catch {
        setStatus("error");
      }
    },
    [reset],
  );

  const b = messages.booking;

  return (
    <>
      <p className="font-mono text-[0.7rem] uppercase tracking-[0.28em] text-stone">
        {b.label}
      </p>
      <h2 className="font-display mt-3 text-3xl tracking-[0.06em] text-espresso sm:text-4xl sm:tracking-[0.08em]">
        {b.title}
      </h2>
      <p className="mt-4 font-body text-stone">{b.description}</p>

      {status === "success" ? (
        <div
          id="mehana-booking-success"
          role="status"
          className="mt-10 rounded-2xl border border-amber/40 bg-alabaster-dark/60 p-8"
        >
          <p className="font-display text-2xl tracking-[0.05em] text-espresso">
            {b.successTitle}
          </p>
          <p className="mt-3 font-body text-stone">{b.successBody}</p>
          <button
            type="button"
            onClick={() => setStatus("idle")}
            className="mt-6 font-mono text-[0.7rem] uppercase tracking-widest text-amber-deep underline hover:text-espresso"
          >
            {b.newRequest}
          </button>
        </div>
      ) : (
        <form
          id="mehana-manastira-booking-form"
          onSubmit={handleSubmit(onSubmit)}
          className="mt-10 space-y-5"
          noValidate
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label
                htmlFor="mehana-booking-name"
                className="font-mono text-[0.65rem] uppercase tracking-widest text-stone"
              >
                {b.name}
              </label>
              <input
                id="mehana-booking-name"
                {...register("name")}
                autoComplete="name"
                className="mt-2 w-full rounded-xl border border-fog bg-alabaster px-4 py-3 text-espresso outline-none ring-0 focus:border-espresso"
              />
              {errors.name ? (
                <p className="mt-1 text-sm text-red-700">{errors.name.message}</p>
              ) : null}
            </div>
            <div>
              <label
                htmlFor="mehana-booking-email"
                className="font-mono text-[0.65rem] uppercase tracking-widest text-stone"
              >
                {b.email}
              </label>
              <input
                id="mehana-booking-email"
                type="email"
                {...register("email")}
                autoComplete="email"
                className="mt-2 w-full rounded-xl border border-fog bg-alabaster px-4 py-3 outline-none focus:border-espresso"
              />
              {errors.email ? (
                <p className="mt-1 text-sm text-red-700">{errors.email.message}</p>
              ) : null}
            </div>
          </div>
          <div>
            <label
              htmlFor="mehana-booking-phone"
              className="font-mono text-[0.65rem] uppercase tracking-widest text-stone"
            >
              {b.phone}
            </label>
            <input
              id="mehana-booking-phone"
              {...register("phone")}
              autoComplete="tel"
              className="mt-2 w-full rounded-xl border border-fog bg-alabaster px-4 py-3 outline-none focus:border-espresso"
            />
            {errors.phone ? (
              <p className="mt-1 text-sm text-red-700">{errors.phone.message}</p>
            ) : null}
          </div>
          <div className="grid gap-5 sm:grid-cols-3">
            <div>
              <label
                htmlFor="mehana-booking-date-btn"
                className="font-mono text-[0.65rem] uppercase tracking-widest text-stone"
              >
                {b.date}
              </label>
              <Controller
                name="date"
                control={control}
                render={({ field }) => (
                  <PremiumDatePicker
                    name="mehana-booking-date"
                    value={field.value}
                    onChange={field.onChange}
                    locale={locale}
                    placeholder={b.datePlaceholder}
                    label={b.date}
                    error={errors.date?.message}
                  />
                )}
              />
            </div>
            <div>
              <label
                htmlFor="mehana-booking-time"
                className="font-mono text-[0.65rem] uppercase tracking-widest text-stone"
              >
                {b.time}
              </label>
              <select
                id="mehana-booking-time"
                {...register("time")}
                className="mt-2 w-full rounded-xl border border-fog bg-alabaster px-4 py-3 outline-none focus:border-espresso"
              >
                {[
                  "12:00",
                  "13:00",
                  "14:00",
                  "15:00",
                  "16:00",
                  "17:00",
                  "18:00",
                  "19:00",
                  "20:00",
                  "21:00",
                  "22:00",
                ].map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
              {errors.time ? (
                <p className="mt-1 text-sm text-red-700">{errors.time.message}</p>
              ) : null}
            </div>
            <div>
              <label
                htmlFor="mehana-booking-guests"
                className="font-mono text-[0.65rem] uppercase tracking-widest text-stone"
              >
                {b.guests}
              </label>
              <input
                id="mehana-booking-guests"
                type="number"
                min={1}
                max={20}
                {...register("guests")}
                className="mt-2 w-full rounded-xl border border-fog bg-alabaster px-4 py-3 outline-none focus:border-espresso"
              />
              {errors.guests ? (
                <p className="mt-1 text-sm text-red-700">{errors.guests.message}</p>
              ) : null}
            </div>
          </div>
          <div>
            <label
              htmlFor="mehana-booking-notes"
              className="font-mono text-[0.65rem] uppercase tracking-widest text-stone"
            >
              {b.notes}
            </label>
            <textarea
              id="mehana-booking-notes"
              rows={3}
              {...register("notes")}
              className="mt-2 w-full rounded-xl border border-fog bg-alabaster px-4 py-3 outline-none focus:border-espresso"
            />
            {errors.notes ? (
              <p className="mt-1 text-sm text-red-700">{errors.notes.message}</p>
            ) : null}
          </div>

          {status === "error" ? (
            <p id="mehana-booking-error" role="alert" className="text-sm text-red-700">
              {b.error}
            </p>
          ) : null}

          <button
            type="submit"
            disabled={status === "loading"}
            onPointerEnter={onCursorCTAEnter}
            onPointerLeave={onCursorCTALeave}
            className="rounded-full bg-espresso px-10 py-3 font-mono text-[0.7rem] uppercase tracking-[0.2em] text-alabaster transition hover:bg-espresso-light disabled:opacity-60"
          >
            {status === "loading" ? b.sending : b.submit}
          </button>
        </form>
      )}
    </>
  );
}
