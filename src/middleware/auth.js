import { useUserStore } from "../stores/user";

export default function authenticated({next, router}) {
    const userStore = useUserStore()
    if(!userStore.authUser) {
        return router.push({ name:'login' })
    }
    return next()
}