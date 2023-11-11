$(document).ready(function() {
    function setDraggableLimits() {
        var windowWidth = $(window).width();
        var windowHeight = $(window).height();

        $(".draggable-container").draggable({
            containment: [0, 0, windowWidth - $(".draggable-container").width(), windowHeight - $(".draggable-container").height()],
            cursor: "grab"
        });
    }

    // Establecer los límites iniciales
    setDraggableLimits();

    // Recalcular los límites cuando se redimensiona la ventana
    $(window).on('resize', function() {
        setDraggableLimits();
    });

    // Cambia el cursor a "grabbing" al hacer clic y mantener
    $(".draggable-container").on("mousedown", function() {
        $(this).css('cursor', 'grabbing');
    });

    // Restablece el cursor a "grab" al soltar el clic
    $(".draggable-container").on("mouseup", function() {
        $(this).css('cursor', 'grab');
    });

    // Cambia el cursor a "grab" cuando pasas sobre el texto
    $(".draggable-container").hover(
        function() {
            $(this).css('cursor', 'grab');
        },
        function() {
            $(this).css('cursor', 'auto');
        }
    );
});
    // Clic en el enlace de correo
    $(".mail").click(function(e) {
        e.preventDefault(); // Evitar el comportamiento predeterminado del enlace
        e.stopPropagation(); // Evita que el clic en el enlace arrastre el contenedor

        // Copiar el correo electrónico al portapapeles
        var emailText = $(this).text();
        var tempElement = $("<textarea>");
        $("body").append(tempElement);
        tempElement.val(emailText).select();
        document.execCommand("copy");
        tempElement.remove();

        // Puedes agregar un mensaje o cualquier lógica adicional después de copiar al portapapeles
        alert("Correo copiado al portapapeles: " + emailText);
    });
