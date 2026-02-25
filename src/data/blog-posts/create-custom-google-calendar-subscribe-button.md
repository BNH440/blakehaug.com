---
title: Create a Custom Google Calendar Subscribe Button
slug: create-custom-google-calendar-subscribe-button
publishDate: 18 Apr 2025
description: Learn how to generate a custom "Add to calendar" link for Google Calendar, replacing the ugly default embed with a clean subscribe button.
---

I'm sure most people have seen a typical google calendar embed, they look ugly at best and are impossible to read (on mobile), at worst. These shortcomings have led many developers to make alternative google calendar embeds, but they're missing one key feature--the "Add to calendar" button.

![Example Default Google Calendar Embed](/assets/blog/google-calendar/google-calendar-embed.png "Typical google calendar embed with add to calendar(+) button in bottom right")

## How to generate the "add to calendar" link

The link this button navigates to can be generated fairly easily. After looking at the embed code, you can see that the URL follows the following format:

```
https://calendar.google.com/calendar/r?cid=ID
```

Where `ID` is the calendar identifier found in the google calendar's settings page:

![Google calendar id example](/assets/blog/google-calendar/calendar-settings.png "To find this page go to your google calendar's settings -> integrate calendar")

Replace `ID` on the above URL with the calendar ID but **_REPLACE the `@` with `%40`_**:

```
https://calendar.google.com/calendar/r?cid=c_5265c32323282w289sf299292%40group.calendar.google.com
```

Now this URL will redirect the user to add your calendar to their own google calendar.

### References

Image credit: https://eventcalendarapp.com/blog/embed-google-calendar/
