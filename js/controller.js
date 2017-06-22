.controller('AppCtrl',function ($scope,$state,$ionicPopup){

	$scope.login={};
	var user="admin";
	var password="123456";

	
	$scope.doLogin=function(){
		console.log("alert");
		console.log(password);
		console.log($scope.login.username);
        console.log($scope.login.password);

		$ionicPopup.alert({
			title:'ล็อกอิน',
				template:'ไม่สามารถล็อกอินได้ กรุณาตรวจสอบ'
		})

        $state.go("History")
	}
})