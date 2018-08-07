var app = angular.module("myApp",[]);
app.controller("myCtrl",function ($scope,$http) {
	
	$scope.alldata = [];
	$scope.newdata = {};

	$scope.add = function(){
	if($scope.newdata.id)
	{
			$http({
				method:"PUT",
				url:"userwebservice",
				data:$scope.newdata
			}).then(function(res){
				for(i=0;i<=$scope.alldata.length;i++)
				{
					if($scope.alldata[i].id == $scope.newdata.id)
					{
						$scope.alldata[i] = $scope.newdata;
					}
				}
			});
			$scope.getdata();
			$scope.newdata = "";
		}
	else
	{
		$http({
			method:"POST",
			url:"userwebservice",
			data:$scope.newdata
		}).then(function(res){
			console.log(res.data);
			$scope.alldata.push(res.data);
		});
		$scope.getdata();
		$scope.newdata = "";
	}
		
	}


	$scope.getdata = function(){
		$http({
			method:"GET",
			url:"userwebservice"
		}).then(function(res){
			$scope.alldata = res.data;
		});
	}


	$scope.askdel = function(obj){
		$scope.selectedobj = obj;
	}


	$scope.delete = function(){
		$http({
			method:"DELETE",
			url:"userwebservice?id="+$scope.selectedobj.id
		}).then(function(res){
			// console.log(res.data);
		});
		$scope.getdata();
	}


	$scope.updata = function(obj){
		// $scope.newdata = obj;
		angular.copy(obj,$scope.newdata);
	}

});