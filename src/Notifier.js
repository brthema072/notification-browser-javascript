const Notifier = {
    async init() {
        const permission = await Notification.requestPermission()
        if(permission !== "granted"){
            console.error("Permissão negada");
        }
    },
    notify({title, body, icon}) {
        new Notification(title, {
            body,
            icon
        })
    }
}

export { Notifier }