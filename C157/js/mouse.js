AFRAME.registerComponent('mouse-events', {
    schema: {
        selectedItemId:{default:"",type:"string"},
    },

    init: function () {
        console.log("working12")
        this.mouseenterevents()
        this.mouseleaveevents()
        console.log("working1")
    },
    listState: function(){
        const id = this.el.getAttribute("id");
        const placeId = ["taj-mahal","budapest","eiffel-tower","new-york-city"];
        console.log(id)
        if (placeId.includes(id)){
            console.log("working2")
            
            const placecontainer = document.querySelector("#places-container");
            placecontainer.setAttribute("cursor-listener",{selectedItemId: id});
            
            this.el.setAttribute("material",{color: blue,opacity:1,})
        };
    },
    mouseenterevents:function(){
        this.el.addEventListener("mouseenter",()=>{
            console.log("workingMouseEnter")
            this.listState()
        })
        console.log("working3")
    },

    mouseleaveevents:function(){
        console.log("working4")
        this.el.addEventListener("mouseleave",()=>{
            console.log("workingMouseLeave")
            const {selectedItemId} = this.data;
            if(selectedItemId){
                const el = document.querySelector(`#${selectedItemId}`);
                const id = el.getAttribute("id");
                if (id == selectedItemId){
                    el.setAttribute("material",{
                        color: red,
                        opacity: 1
                    })
                }
            }
        })
    },
});
