# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


  const handleSubmit = e => {
    e.preventDafault();
    // console.log(e.target.elements);
    if (e.target.elements.query.value.trim() === '') {
    if (e.target.elements.query.value.trim() === '') {
      toast.error('EMPTY STRING!', {
      duration: 2000,
      position: 'bottom-center'}),
      return;
    }
    onSearch(e.target.elements.query.value);
    e.target.reset();
  };

    // // const searchBtnRef = useRef()
  // const searchAreaRef = useRef()
  //   const handleSubmit = () => {
  //     searchAreaRef.preventDafault()
  //     // console.log('BtnRef' `${searchBtnRef.current}`)
  //     console.log('InputRef' `${searchAreaRef.current}`)
  //   }