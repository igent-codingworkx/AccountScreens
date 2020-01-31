import Icon from 'react-native-vector-icons/FontAwesome';

(
    function () {
          
        Promise.all(
                
             [
                 Icon.getImageSource('search',25),
                 Icon.getImageSource('pencil',25),
                 Icon.getImageSource('pin',25),
                 Icon.getImageSource('heart',25),
                 Icon.getImageSource('user-circle',25),
             ]
        ).then(async (values) => {
             global.icons = values
        });
    } ()

);