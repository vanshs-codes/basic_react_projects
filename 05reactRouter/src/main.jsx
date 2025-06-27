import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom'
import User from './components/User.jsx'
import Github from './components/Github.jsx'

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     children: [
//       {
//         path: "",
//         element: <h1 className='text-white'>
//           Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem repellat a, incidunt nesciunt, omnis nam voluptatem totam aut hic reiciendis quae odit eos nobis possimus doloremque sint laborum odio. Assumenda sint excepturi veniam natus, culpa aliquid hic repudiandae! Magni sapiente debitis harum obcaecati neque placeat id perspiciatis officia dolor porro. Aspernatur architecto corrupti praesentium laboriosam corporis, quae adipisci cupiditate mollitia vero perspiciatis assumenda consequuntur voluptatem eos? Ipsam sequi perferendis nobis officiis reprehenderit! Esse eveniet modi laborum vitae veritatis obcaecati dolores recusandae quia aut? Molestiae nihil dolorem voluptatem architecto magnam rem, amet eaque similique dolore labore ut error id suscipit repudiandae tenetur voluptatum. Commodi, aut numquam? Ipsam temporibus enim vel laborum eum voluptates facere omnis sapiente iure minus ullam laudantium mollitia excepturi perferendis quisquam, quam, est nesciunt architecto iusto quod? Alias iure, magnam, sint velit numquam maxime ipsam cum aliquid id odit quaerat ea et blanditiis optio voluptas eligendi dolorum magni vitae. Nesciunt nisi labore nobis? Asperiores, hic dolorum debitis praesentium enim voluptatem atque totam expedita cupiditate itaque. Non dolore architecto omnis, id veritatis ullam repellendus magni nobis deserunt dolorum et ex numquam quibusdam voluptatum atque minima doloremque libero sed reiciendis esse quis incidunt. Est impedit at enim voluptatum eaque quibusdam deserunt velit ut rerum dignissimos itaque eum, quam temporibus dolorem earum obcaecati nisi id eius laborum quidem nam? Deserunt laudantium delectus incidunt neque porro reprehenderit saepe velit non, voluptatem, voluptate nam rerum. Fuga magni architecto quia in vitae sunt laborum cumque ut soluta culpa doloribus aspernatur error eaque corporis, similique nemo sequi dolor! A omnis itaque esse fugiat dignissimos quae sapiente labore hic quasi odit nulla, animi ipsa obcaecati temporibus optio blanditiis minima nostrum laboriosam possimus aperiam provident. Esse, sit. Doloribus neque, nihil, itaque ad molestiae maxime provident voluptas quos illum maiores enim totam, iure corporis fugit deserunt harum eaque temporibus nobis delectus beatae! Autem dolores quaerat, consequuntur aliquam natus suscipit animi et mollitia illum qui quasi quo porro doloremque inventore est quidem eligendi odio fuga! Ab modi quasi aspernatur ex nostrum totam corporis recusandae provident, aut rem id sequi temporibus hic nesciunt corrupti ducimus facilis laboriosam earum unde? Dolorem corporis obcaecati, quos fuga assumenda sit dolore culpa at earum qui voluptas, debitis voluptatum enim non deleniti odio nesciunt accusamus sint officia laborum vel iste amet suscipit? Hic eligendi eum natus numquam saepe. Optio dignissimos, labore blanditiis magnam eum eaque cupiditate rem eligendi, culpa enim eveniet omnis quod. Quas saepe aut unde ipsam, ipsum accusamus odit libero veritatis explicabo, quae aperiam asperiores ad nihil commodi doloremque dolores eligendi. Illo omnis pariatur nulla unde magnam ipsa, similique, consequuntur aliquid quo repellendus doloribus beatae ratione dolorum qui placeat eos ex autem aperiam at dolorem sequi porro, harum magni ut. Eaque, animi! At vero, esse quod a autem totam dolorum minus ipsum error unde dolores, placeat consectetur. Nihil, sint aliquam praesentium consequuntur sed expedita voluptate quas! Nihil perspiciatis debitis modi quo iste alias dolorem deserunt et a adipisci exercitationem quia, cumque dignissimos maxime eos. Autem, quae? Unde vero incidunt nobis obcaecati aspernatur, quas magnam, tempora quis ex sapiente fugiat voluptates quam eius corrupti optio totam distinctio odio eum temporibus earum! Harum est aut reprehenderit iure nostrum. Cumque provident optio, quasi aut deserunt labore praesentium, soluta rerum minima eligendi obcaecati odit consectetur architecto? Repellat commodi modi aliquam quos ipsam ex, laudantium tempora officia iusto eligendi illum reiciendis laborum alias deleniti. Velit nobis consequatur at nostrum amet, mollitia vero ut dignissimos sint quas vitae officia blanditiis perferendis dolore! Aperiam ab sunt alias enim doloremque tempore vero! Excepturi eius quibusdam rem eveniet esse natus explicabo nemo nostrum itaque reprehenderit? Placeat, qui? Officia amet doloribus placeat consequuntur quas, soluta quam magni nobis rem distinctio molestiae nesciunt, sint et voluptate ullam neque delectus natus, quo unde quaerat! Asperiores a id sint magnam explicabo blanditiis dolor, perspiciatis cum mollitia sequi veritatis aut officia harum corrupti, ducimus similique omnis tempora ipsum voluptatem porro obcaecati! Asperiores accusamus tempore quam atque praesentium. Praesentium quidem eos obcaecati voluptatibus iste repudiandae reprehenderit eius ipsam laudantium odit beatae laborum quo, incidunt cupiditate necessitatibus nobis ipsa aperiam reiciendis iure quos? A iure obcaecati hic, reprehenderit voluptatibus dicta. Eaque facilis perferendis fugiat dolore tempora dicta, cum maxime nesciunt molestiae explicabo. Consectetur eligendi voluptas ab ipsum et totam ducimus similique unde cum, omnis libero facere recusandae excepturi neque, veniam possimus rerum aspernatur quidem placeat ut sapiente. Neque eum dolorum earum porro alias. A ab officia enim vitae autem voluptate repudiandae sed, provident magnam maiores eos, distinctio saepe explicabo at? Quas quibusdam iste perferendis hic at praesentium iure minus, dicta itaque doloremque vitae neque ab incidunt sed quis fugit. Aliquam ex, ducimus quibusdam odio mollitia ut error repudiandae fugit sapiente eos ad asperiores temporibus quis debitis molestias illum? Officiis, recusandae. Nemo, rerum sunt ipsam doloribus non quasi delectus suscipit quas possimus recusandae excepturi eius animi, velit maxime in dolores minima. Facere, fuga! Modi numquam in ipsa non ipsum consectetur repellat necessitatibus expedita obcaecati voluptatem ea cum, nisi nesciunt hic alias! Magni, modi eligendi? Earum minus repudiandae voluptatum doloremque ullam nesciunt, excepturi quasi aut consequatur aspernatur amet. Assumenda voluptatibus, magni maiores deleniti qui dolorum sapiente similique ipsum illo aspernatur sed quisquam eaque amet placeat eius maxime molestiae, consequuntur veritatis distinctio unde ad iste! Aut facilis exercitationem beatae reprehenderit velit quos minima, delectus nemo corporis expedita quasi quam repudiandae consequatur natus fuga labore nisi atque suscipit ullam optio deserunt repellat illo vitae quisquam? Adipisci dolorem neque ab blanditiis laudantium amet, nam tempore ipsa accusantium nostrum? Eveniet architecto debitis deserunt sit at sed incidunt dolor atque molestiae laudantium voluptas recusandae, optio unde ipsam repellat est commodi mollitia ipsa omnis sapiente quod. Sunt odio doloremque veniam voluptatibus expedita fuga voluptate, eligendi nemo accusamus cum quae natus qui non asperiores nesciunt nam deleniti consequatur magni. Odio quod id totam quisquam odit necessitatibus asperiores at vitae facilis voluptate ratione, commodi blanditiis quia? Quisquam dolorem quo harum, suscipit laborum repellendus error consequuntur aliquam perferendis? Qui provident neque repellendus, fugiat voluptatum necessitatibus reiciendis rerum. Culpa reiciendis corrupti facere rem asperiores, ut dicta nam libero ab iusto explicabo!
//           </h1>
//       },
//       {
//         path: "About",
//         element: <h1 className='text-orange-500'>About</h1>
//       },
//       {
//         path: "user/:userId",
//         element: <User />
//       }
//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<h1 className='text-white'> Home </h1>} />
      <Route path="about" element={<h1 className='text-white'> About </h1>} />
      <Route path="user/:userId" element={<User />} />
      <Route 
      loader={async () => {
        const res = await fetch("https://api.github.com/users/vanshs-codes");
        return res.json();
      }}
      path="github" 
      element={<Github />} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
