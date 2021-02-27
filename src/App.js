import { Notifier } from "./Notifier.js";

const App = {
    async start(){
        await Notifier.init()
        Notifier.notify({
            title: "Hora do post",
            body: "Crie algum conteúdo para ajudar a comunidade"
        })

    }
}

export { App }