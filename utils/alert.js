import Swale from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const mySwale = withReactContent(Swale)

export const Alerting = ({ title, message, icon, type }) => {
    mySwale.fire({
        title: title,
        text: message,
        icon: icon,
        confirmButtonText: 'OK',
        confirmButtomColor: "#1E6594",
        type: type
    })
}