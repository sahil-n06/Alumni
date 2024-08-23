export const headerLinks = [
    {
      label: 'Home',
      route: '/',
    },
    {
      label: 'Alumini',
      route: '/alumini',
    },
    {
        label: 'Donation',
        route: '/donation',
      },
      {
        label: 'Events',
        route: '/events',
      },
  ]
  
  export const eventDefaultValues = {
    title: '',
    description: '',
    location: '',
    imageUrl: '',
    startDateTime: new Date(),
    endDateTime: new Date(),
    categoryId: '',
    price: '',
    isFree: false,
    url: '',
  }