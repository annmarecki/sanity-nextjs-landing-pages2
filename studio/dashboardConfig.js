export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '62b0e32dd39be71c44d4932c',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-2-studio-xsfcchx2',
                  apiId: '457010c1-e32f-4ca2-888d-03974973bf05'
                },
                {
                  buildHookId: '62b0e32e446d521743d29b80',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-2-web-mqz69dt8',
                  apiId: 'f948e865-f3fd-45cc-a840-6cbfb1fe6729'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/annmarecki/sanity-nextjs-landing-pages2',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-2-web-mqz69dt8.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
