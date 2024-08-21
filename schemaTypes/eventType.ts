import {defineField, defineType} from 'sanity'
import {CalendarIcon} from '@sanity/icons'

export const eventType = defineType({
  name: 'event',
  title: 'Event',
  icon: CalendarIcon,
  type: 'document',

  // Above the "fields" array
  groups: [
    {name: 'details', title: 'Details'},
    {name: 'editorial', title: 'Editorial'},
  ],

  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {source: 'name'},
      validation: (rule) => rule
        .required()
        .error(`Required to generate a page on the website`),
    }),
    defineField({
      name: 'eventType',
      type: 'string',
      options: {
        list: ['in-person', 'virtual'],
        layout: 'radio',
      },
    }),
    defineField({
      name: 'date',
      type: 'datetime',
      group: 'details',
    }),
    defineField({
      name: 'doorsOpen',
      description: 'Number of minutes before start',
      type: 'number',
      initialValue:60
    }),
    defineField({
      name: 'venue',
      type: 'reference',
      to: [{type: 'venue'}],
      
    }),
    defineField({
      name: 'headline',
      type: 'reference',
      to: [{type: 'artist'}],
      group: 'details',
    }),
    defineField({
      name: 'image',
      type: 'image',
    }),
    defineField({
      name: 'details',
      type: 'array',
      of: [{type: 'block'}],
      group: 'details',
    }),
    defineField({
      name: 'tickets',
      type: 'url',
    }),
    defineField({
      name: 'isPublished',
      title: 'Is Published',
      type: 'boolean',
    }),
  ],
  // After the "fields" array
// Update the preview key in the schema
preview: {
  select: {
    name: 'name',
    venue: 'venue.name',
    artist: 'headline.name',
    date: 'date',
    image: 'image',
  },
  prepare({name, venue, artist, date, image}) {
    const nameFormatted = name || 'Untitled event'
    const dateFormatted = date
      ? new Date(date).toLocaleDateString(undefined, {
          month: 'short',
          day: 'numeric',
          year: 'numeric',
          hour: 'numeric',
          minute: 'numeric',
        })
      : 'No date'

    return {
      title: artist ? `${nameFormatted} (${artist})` : nameFormatted,
      subtitle: venue ? `${dateFormatted} at ${venue}` : dateFormatted,
      media: image || CalendarIcon,
    }
  },
},
})
