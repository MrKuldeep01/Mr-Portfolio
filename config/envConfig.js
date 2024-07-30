const formAccessKey = import.meta.env.VITE_FORM_ACCESSKEY;

!formAccessKey && console.log("formAccessKey not defined");
export default { formAccessKey };
