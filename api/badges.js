export default async function handler(req, res) {
  const badges = [
    {
      image:
        'https://i.seadn.io/gae/2hDpuTi-0AMKvoZJGd-yKWvK4tKdQr_kLIpB_qSeMau2TNGCNidAosMEvrEXFO9G6tmlFlPQplpwiqirgrIPWnCKMvElaYgI-HiVvXc?auto=format&w=1000',
      name: 'Shrek',
      job: 'Swamp Monster',
      occupation: 'King of the Swamp',
      companyLogo:
        'https://www.logolynx.com/images/logolynx/4e/4ea5536c64b9a89540dfcac2ca4e16f9.png',
    },
    {
      image:
        'https://www.vhv.rs/dpng/d/466-4667360_donkey-from-shrek-png-transparent-png.png',
      name: 'Donkey',
      job: 'Father of the Dragon Babies',
      occupation: "Shrek's Best Friend",
      companyLogo:
        'https://www.logolynx.com/images/logolynx/4e/4ea5536c64b9a89540dfcac2ca4e16f9.png',
    },
    {
      image:
        'https://th.bing.com/th/id/R.3af74f3564fb766d949b1c9350917c5c?rik=vx36fqvcX2RhIg&pid=ImgRaw&r=0',
      name: 'Fiona',
      job: 'Ogre Princess',
      occupation: "Shrek's Wife",
      companyLogo:
        'https://www.logolynx.com/images/logolynx/4e/4ea5536c64b9a89540dfcac2ca4e16f9.png',
    },
    {
      image:
        'https://th.bing.com/th/id/OIP.cGa1RuyY-sCxtd_K09KXEAAAAA?pid=ImgDet&rs=1',
      name: 'Elizabeth',
      job: 'Crazy Dragon',
      occupation: "Donkey's Wife",
      companyLogo:
        'https://www.logolynx.com/images/logolynx/4e/4ea5536c64b9a89540dfcac2ca4e16f9.png',
    },
    {
      image:
        'https://alchetron.com/cdn/lord-farquaad-4c9741d4-d43e-44ae-848f-654bed1ef0f-resize-750.jpeg',
      name: 'Lord Farquaad',
      job: 'Evil King',
      occupation: "Shrek's Enemy",
      companyLogo:
        'https://www.logolynx.com/images/logolynx/4e/4ea5536c64b9a89540dfcac2ca4e16f9.png',
    },
  ];

  res.setHeader('Cache-Control', 'max-age=0, s-maxage=1800');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET,OPTIONS,PATCH,DELETE,POST,PUT'
  );
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );
  res.json(badges);
}
