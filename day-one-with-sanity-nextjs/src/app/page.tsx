import Link from "next/link";
import { SanityDocument } from "next-sanity";
import { sanityFetch } from "@/sanity/client";

const EVENTS_QUERY = `*[
  _type == "event"
]{_id, name, slug}|order(_createdAt desc)`; // Include slug in the query

export default async function IndexPage() {
  const events = await sanityFetch<SanityDocument[]>({ query: EVENTS_QUERY });

  return (
    <main className="flex bg-gray-100 min-h-screen flex-col p-24 gap-12">
      <h1 className="text-4xl font-bold tracking-tighter">
        Events
      </h1>
      <ul className="grid grid-cols-1 gap-12 lg:grid-cols-2">
        {events.map((event) => (
          <li
            className="bg-white p-4 rounded-lg"
            key={event._id}
          >
            <Link
              className="hover:underline"
              href={`/events/${event.slug.current}`} // Use the slug to create a link to the detail page
            >
              <h2 className="text-xl font-semibold">{event?.name}</h2>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
