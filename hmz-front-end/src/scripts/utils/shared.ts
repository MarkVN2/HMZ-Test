import Swal from "sweetalert2"

export const successAlert = (text: string, log?: string)=>{
    Swal.fire({
      title: 'Sucesso',
      text: text,
      icon: 'success',
      showConfirmButton: false,
      timer: 1750,
      timerProgressBar: true,
    })
    console.log(log)
  }
export const failureAlert = (log: string)=>{
    Swal.fire({
        title: 'Oops!',
        text: `Algo de errado aconteceu :(`,
        icon: 'error',
        showConfirmButton: false,
        timer: 1750,
    });
    console.log(log)

}
export const warningAlert = (log: string,text : string, action:Function)=>{
    Swal.fire({
        title: 'Atenção',
        text: text,
        icon: 'warning',
        showConfirmButton: true,
    }).then((result) => {
    if (result.isConfirmed) {
        action()
        }
    });
    console.log(log)

}