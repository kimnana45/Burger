$ = () => $('.create-form').on('submit', event => event.preventDefault());

const newBurger = {
    burger_name: $('#newBurger').val().trim(),
    devoured: 0
}
//POST
$.ajax('api/burgers', {
    type: 'POST',
    data: newBurger
}).then(() => {
    console.log('New burger added!');
    location.reload();
});
//UPDATE
$('.eatBurger').on('click', event => {
    event.preventDefault();
    const id = $(this).data('id');
    const devouredState = {devoured: 1};

    $.ajax('/api/burgers' + id, {
        type: 'PUT',
        data: devouredState
    }).then(() => {
        console.log('Burger devoured!');
        location.reload();
    });
});
//DELETE
$('.deleteBurger').on('click', event => {
    event.preventDefault();
    const id = $(this).data('id');

    $.ajax({
        type: 'DELETE', 
        url: 'api/burgers/' + id
    }).then(location.reload());
});
