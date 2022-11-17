
/**
 * If you want to enable locale keys typechecking and enhance IDE experience.
 *
 * Requires `resolveJsonModule:true` in your tsconfig.json.
 *
 * @link https://www.i18next.com/overview/typescript
 */
import 'i18next'

import type about from '../public/locales/en/about.json'
import type auth from '../public/locales/en/auth.json'
import type blog from '../public/locales/en/blog.json'
import type cart from '../public/locales/en/cart.json'
import type category from '../public/locales/en/category.json'
import type common from '../public/locales/en/common.json'
import type footer from '../public/locales/en/footer.json'
import type historyBuy from '../public/locales/en/historyBuy.json'
import type historySale from '../public/locales/en/historySale.json'
import type home from '../public/locales/en/home.json'
import type major from '../public/locales/en/major.json'
import type product from '../public/locales/en/product.json'
import type review from '../public/locales/en/review.json'
import type search from '../public/locales/en/search.json'
import type user from '../public/locales/en/user.json'
import type verify from '../public/locales/en/verify.json'
// import type secondPage from '../public/locales/en/second-page.json'

interface I18nNamespaces {
    about: typeof about
    auth: typeof auth
    blog: typeof blog
    cart: typeof cart
    category: typeof category
    common: typeof about
    footer: typeof footer
    historyBuy: typeof historyBuy
    historySale: typeof historySale
    home: typeof home
    major: typeof major
    product: typeof product
    review: typeof review
    search: typeof search
    user: typeof user
    verify: typeof verify
    // 'second-page': typeof secondPage
}

declare module 'i18next' {
    interface CustomTypeOptions {
        defaultNS: 'common'
        resources: I18nNamespaces
    }
}
