import { FC } from 'react'
import { useRouter } from 'next/router'

interface I_NAVBAR_COMPONENT {
    page: 'index' | 'login' | 'about'
}

const NAVBAR_COMPONENT: FC<I_NAVBAR_COMPONENT> = props => {
  const ROUTER = useRouter()

  return (
    <>
      <input
        type="button"
        value="Home"
        disabled={props.page === 'index'}
        onClick={() => ROUTER.push('/')}
      />
      <input
        type="button"
        value="Login"
        disabled={props.page === 'login'}
        onClick={() => ROUTER.push('/login')}
      />
      <input
        type="button"
        value="Sobre"
        disabled={props.page === 'about'}
        onClick={() => ROUTER.push('/about')}
      />
    </>
  )
}

export default NAVBAR_COMPONENT
