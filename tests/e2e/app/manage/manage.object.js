var ManagePage = function() {
	
	this.createNewProject = function() {
		var actionItemButton = element(by.css('.heading button'));
		console.log('this.actionItem '+actionItemButton);
		var EC = protractor.ExpectedConditions;
		var isClickable = EC.elementToBeClickable(actionItemButton);
		browser.wait(isClickable, 10000);
		
		actionItemButton.click().then(function(){
//	    	browser.waitForAngular();
	    	console.log('click action item');
	    	var workName = element(by.model('vm.work.name'));
//	    	isClickable = EC.elementToBeClickable(actionItemButton);
//	    	browser.wait(isClickable, 10000);
	    	console.log('label item'+workName);
	    	var workNameText = workName.getText();
	    	console.log('workNameText '+workNameText);
	    	workName.clear();
	    	workName.sendKeys('Dummy Project');
	    	
	    	var estimateLink = element(by.css('.estimate'));
	    	
	    	estimateLink.click().then(function() {
	    		var submitWork = element(by.id('submit-work-accept-terms'));
				submitWork.click();
				submitButton = element(by.css('.launch'));
				submitButton.click().then(function(){
					//console.log('hii testing complete');
				})
	    	});
		});
	};

	
	this.continueSetup = function(project) {
//		var actionItemButton = element(by.css('.heading button'));
//		console.log('this.actionItem '+actionItemButton);
//		var EC = protractor.ExpectedConditions;
//		var isClickable = EC.elementToBeClickable(actionItemButton);
//		browser.wait(isClickable, 10000);
//		
//		actionItemButton.click().then(function(){
////	    	browser.waitForAngular();
//	    	console.log('click action item');
//	    	var workName = element(by.model('vm.work.name'));
////	    	isClickable = EC.elementToBeClickable(actionItemButton);
////	    	browser.wait(isClickable, 10000);
//	    	console.log('label item'+workName);
//	    	var workNameText = workName.getText();
//	    	console.log('workNameText '+workNameText);
//	    	workName.clear();
//	    	workName.sendKeys('Dummy Project');
//	    	
//	    	var estimateLink = element(by.css('.estimate'));
//	    	
//	    	estimateLink.click().then(function() {
//	    		var submitWork = element(by.id('submit-work-accept-terms'));
//				submitWork.click();
//				submitButton = element(by.css('.launch'));
//				submitButton.click().then(function(){
//					//console.log('hii testing complete');
//				})
//	    	});
//		});
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		var actionItemList = element.all(by.css('.action .ng-scope'));
		this.actionItem = actionItemList.get(5);
		console.log('actionItem  '+ this.actionItem);
	
    var EC = protractor.ExpectedConditions;
    
    this.actionItem.click().then(function() {
    	var workName = element(by.model('vm.work.name'));
    	console.log('label item'+workName);
    	var workNameText = workName.getText();
    	console.log('workNameText '+workNameText);
    	workName.clear();
    	workName.sendKeys(project.name);
    	var submitButton = element(by.css('.submit'));
    	submitButton.click().then(function() {
    		var projectType = null;
    		if(project.type == 'Design') {
    			projectType = element(by.id('project-type-design'));
    		} else if(project.type == 'Code') {
    			projectType = element(by.id('project-type-code'));
    		} else if(project.type == 'Design-Code') {
    			projectType = element(by.id('project-type-design-code'));
    		}
    		projectType.click().then(function() {
    			console.log('projectType '+projectType);
    			submitButton = element(by.css('.submit'));
    			console.log('submitButton'+submitButton);
    			submitButton.click().then(function() {
    				var yesNoUpload = null;
    				var cancelButton = element(by.css('.cancel'));
//    				cancelButton.click().then(function() {
    				if(project.upload == 'yes') {
    					yesNoUpload = element(by.css('.yes'));
    				} else {
    					yesNoUpload = element(by.css('.no'));
    				}
    				yesNoUpload.click().then(function(){
    					
    					if(project.upload != 'yes') {
    						var workSummary = element(by.model('vm.work.summary'));
    						workSummary.clear();
    						workSummary.sendKeys(project.workSummary);
    					}
    					submitButton.click().then(function(){
    						submitButton = element(by.css('.submit'));
    						submitButton.click().then(function(){
    							var description = element(by.model('vm.work.usageDescription'));
    							description.clear();
    							description.sendKeys(project.description);
    							submitButton = element(by.css('.submit'));
    							submitButton.click().then(function(){
    								
    								for(var j=0; j < project.featureList.length; j++) {
    									if(project.featureList[j].featureName == 'login') {
    										var featureLogin = element(by.id('feature-login'));
    	    								featureLogin.click();
    	    								var explanation = element(by.model('feature.explanation'));
    	    								explanation.sendKeys(project.featureList[j].explanation);
    									} else if(project.featureList[j].featureName == 'profiles') {
    										var featureProfiles = element(by.id('feature-profiles'));
    										featureProfiles.click();
    										var explanation = element(by.model('feature.explanation'));
    	    								explanation.sendKeys(project.featureList[j].explanation);
    									} else if(project.featureList[j].featureName == 'forms') {
    										var featureForms = element(by.id('feature-forms'));
    										featureForms.click();
    										var explanation = element(by.model('feature.explanation'));
    	    								explanation.sendKeys(project.featureList[j].explanation);
    									}  else if(project.featureList[j].featureName == 'social') {
    										var featureSocial = element(by.id('feature-social-login'));
    										featureSocial.click();
    										var explanation = element(by.model('feature.explanation'));
    	    								explanation.sendKeys(project.featureList[j].explanation);
    									} else if(project.featureList[j].featureName == 'map') {
    										var featureMap = element(by.id('feature-map'));
    										featureMap.click();
    										var explanation = element(by.model('feature.explanation'));
    	    								explanation.sendKeys(project.featureList[j].explanation);
    									} else if(project.featureList[j].featureName == 'listing') {
    										var featureListing = element(by.id('feature-listing'));
    										featureListing.click();
    										var explanation = element(by.model('feature.explanation'));
    	    								explanation.sendKeys(project.featureList[j].explanation);
    									} else if(project.featureList[j].featureName == 'new-feature') {
    										var newFeature = element(by.model('vm.newFeature'));
    										newFeature.click();
    										var newFeautreName = element(by.model('vm.newFeatureName'));
    										newFeatureName.sendKeys(project.featureList[j].name);
    										var newFeatureExplanation = element(by.model('vm.newFeatureExplanation'));
    										newFeatureExplanation.sendKeys(project.featureList[j].explanation);
    									} 
    									
    								}
    								submitButton = element(by.css('.submit'));
    								submitButton.click().then(function(){
    									submitButton = element(by.css('.submit'));
    									submitButton.click().then(function(){
    										var submitWork = element(by.id('submit-work-accept-terms'));
    										submitWork.click();
        									submitButton = element(by.css('.launch'));
        									submitButton.click().then(function(){
        										//console.log('hii testing complete');
        									})
        								});
    									
    								});
    							});
    							
    						});
    					})
    				});
//    			});
    				
    			});
    		});
    	});
    });
  };
  
  /*
   this.editProject = function () {
	  var workLabel = element(by.model('vm.work.name'));
	  var EC = protractor.ExpectedConditions;
	  console.log('label item '+workLabel);
	  browser.driver.wait(protractor.until.elementIsNotVisible(workLabel));
	  browser.wait(EC.not(EC.presenceOf(workLabel)), 10000);
	  
	  workLabel.sendKeys('new name is given');
	
  };
  */
  
};
module.exports = new ManagePage();