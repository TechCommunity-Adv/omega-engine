Vue.component("aleph-upgrade-fr", {
    props: ["upgrade"],
    template: `<resource-upgrade :upgrade="upgrade" :resourcename="'<span class=` + 'aleph' + `>ℵ</span>'"></resource-upgrade>`
});