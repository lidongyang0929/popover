$(clickMe).on('click',function(){
    $(popover).show()
    $(document).one('click',function(){
        $(popover).hide()
    })
})

$(wrapper).on('click',false)
