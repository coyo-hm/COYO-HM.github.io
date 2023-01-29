import Header from './Header'

const Container = props => {
  return (
    <div className={`w-full flex flex-col items-center p-3`}>
      <Header />
      <main className={`w-full max-w-3xl`}>{props.children}</main>
    </div>
  )
}

export default Container
