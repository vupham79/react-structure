export default function () {
  return (store) => (next) => (action) => {
    const { type, error } = action

    next(action)
  }
}
