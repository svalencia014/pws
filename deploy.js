import * as ghpages from 'gh-pages'

ghpages.publish(
    'build', // path to public directory
    {
        branch: 'gh-pages',
        repo: 'https://github.com/svalencia014/PWS.git', // Update to point to your repository  
        user: {
            name: 'svalencia014', // update to use your name
            email: 'sv.samuel.valencia014@gmail.com' // Update to use your email
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)