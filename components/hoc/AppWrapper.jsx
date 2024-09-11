import NavigationDot from './NavigationDot'

const AppWrapper = (Component, idName, className) =>
  function HigherOrderComponents() {
    return (
      <div id={idName} className={`${className}`}>
        <div className="container">
          <Component />
        </div>
        <NavigationDot />
      </div>
    )
  }
export default AppWrapper
