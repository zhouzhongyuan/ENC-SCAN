/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {

        // this.receivedEvent('deviceready');
        // 扫码
        scan
        var scanButton = document.getElementById('scan');
        scanButton.addEventListener('click', function (e) {
            var flag = false;
            cordova.plugins.barcodeScanner.scan(
                function (result) {
                    // 查询价格和品名
                    var goodsCode = result.text;
                    data.forEach(function (item, index) {
                        if(goodsCode == item.goodsCode){
                            flag = true;
                            alert(
                                "条码: " + item.goodsCode + "\n" +
                                "价格: " + item.goodsPrice + "\n" +
                                "品名: " + item.goodsName + "\n"
                            );
                            return;
                        }
                    })
                    if(!flag){
                        alert("档案里面没有这个商品，请拿去收银台入档案")
                    }

                },
                function (error) {
                    alert("Scanning failed: " + error);
                },
                {
                    // preferFrontCamera : true, // iOS and Android
                    // showFlipCameraButton : true, // iOS and Android
                    // showTorchButton : true, // iOS and Android
                    // torchOn: true, // Android, launch with the torch switched on (if available)
                    prompt : "请对着扫码区域", // Android
                    // resultDisplayDuration: 500, // Android, display scanned text for X ms. 0 suppresses it entirely, default 1500
                    formats : "EAN_13", // default: all but PDF_417 and RSS_EXPANDED
                }
            );
        })

    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

app.initialize();