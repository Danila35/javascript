<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
    // Задача 1
    <script>
        var a = 1, b = 1, c, d;
        c = ++a; alert(c);           // 2 /* ++a добавляю единицу */
        d = b++; alert(d);           // 1 /* также +1, но беру первый результат тоесть 1 */
        c = (2+ ++a); alert(c);      // 5 /* 2 + 2 + 1(++a) поэтому 5 */
        d = (2+ b++); alert(d);      // 4 /* 2 + 2 + 1(++b) но берем перове число тоесть 2
                                             и получаем 4 */
        alert(a);                    // 3 /* в 1 и 3 примере прибавили 1 получ 3 */
        alert(b);                    // 3 /* в 2 и 4 примере прибавили 1 получ 3 */
    </script>
    // Задача 2
    <script>
        var a = 2;
        var x = 1 + (a *= 2);
        // равен 5   (2 * 2 + 1)
    </script>
    // Задача 3
    <script>
        var a = 3;
		var b = 2;
		if (a > 0 && b > 0){
		x = a - b;
		alert(x);
		} else if (a < 0 && b < 0){
			x = a * b;
			alert (x);
			}
		  else if (a > 0 && b < 0 || a < 0 && b > 0) {
		  x = a + b;
		  alert (x);
		  }
    </script>
    // Задача 4
    <script>
		a = +prompt ('Введите число от 1 до 15');
		switch (a) {
		case 1:
			alert ( 'Ваше число 1');
			break;
		case 2:
			alert ( 'Ваше число 2');
			break;
		case 3:
			alert ( 'Ваше число 3');
			break;
		case 4:
			alert ( 'Ваше число 4');
			break;
		case 5:
			alert ( 'Ваше число 5');
			break;
		case 6:
			alert ( 'Ваше число 6');
			break;
		case 7:
			alert ( 'Ваше число 7');
			break;
		case 8:
			alert ( 'Ваше число 8');
			break;
		case 9:
			alert ( 'Ваше число 9');
			break;
		case 10:
			alert ( 'Ваше число 10');
			break;
		case 11:
			alert ( 'Ваше число 11');
			break;
		case 12:
			alert ( 'Ваше число 12');
			break;
		case 13:
			alert ( 'Ваше число 13');
			break;
		case 14:
			alert ( 'Ваше число 14');
			break;
		case 15:
			alert ( 'Ваше число 15');
			break;
		}
	</script>
    // Задача 4
    <script>
		var a = 2;
		var b = 3;

		function plus(a, b) {
    		return a + b;
		}

		function minus(a, b) {
    		return a - b;
		}

		function div (a, b) {
    		return a / b;
		}

		function mult (a, b) {
    		return a + b;
		}
	</script>
    // Задача 6
    <script>
        function mathOperation(arg1, arg2, operation){
    			switch(operation){
       				 case 'сложение':
           				 return arg1 + arg2;
           				 break;
       				 case 'вычитание':
           				 return arg1 - arg2;
            			 break;
        			 case 'деление':
                      			 return arg1 / arg2;
            			 break;
       				 case 'умножение':
           				 return arg1 * arg2;
            			 break;
   				}
		}
    </script>
    // Задача 7
    <script>
    /*
    null будет преобразовано в +0, а 0 останется самим собой.
    Ни одно из этих значений не является NaN, поэтому шаги алгоритма 6 и 7 можно пропустить.
    А вот на шаге 8 нам надо остановиться. Значение +0 равно 0, в результате алгоритм возвращает false
    null > 0; // false
    null < 0; // тоже false
    */
    </script>
    // Задача 8
    <script>
    function power(val, pow){
        if(pow === 0) return 1;

        return val * power(val, pow-1)
    }
    result = power(5,3)
    alert(result)
    </script>
</body>
</html>
