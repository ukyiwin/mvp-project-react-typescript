/******/ (function(modules) { // webpackBootstrap
/******/ 	function hotDownloadUpdateChunk(chunkId) { // eslint-disable-line no-unused-vars
/******/ 		var chunk = require("./" + "" + chunkId + "." + hotCurrentHash + ".hot-update.js");
/******/ 		hotAddUpdateChunk(chunk.id, chunk.modules);
/******/ 	}
/******/ 	
/******/ 	function hotDownloadManifest() { // eslint-disable-line no-unused-vars
/******/ 		try {
/******/ 			var update = require("./" + "" + hotCurrentHash + ".hot-update.json");
/******/ 		} catch(e) {
/******/ 			return Promise.resolve();
/******/ 		}
/******/ 		return Promise.resolve(update);
/******/ 	}
/******/ 	
/******/ 	function hotDisposeChunk(chunkId) { //eslint-disable-line no-unused-vars
/******/ 		delete installedChunks[chunkId];
/******/ 	}
/******/
/******/ 	
/******/ 	
/******/ 	var hotApplyOnUpdate = true;
/******/ 	var hotCurrentHash = "eb7c93d8f6e2631da11f"; // eslint-disable-line no-unused-vars
/******/ 	var hotRequestTimeout = 10000;
/******/ 	var hotCurrentModuleData = {};
/******/ 	var hotCurrentChildModule; // eslint-disable-line no-unused-vars
/******/ 	var hotCurrentParents = []; // eslint-disable-line no-unused-vars
/******/ 	var hotCurrentParentsTemp = []; // eslint-disable-line no-unused-vars
/******/ 	
/******/ 	function hotCreateRequire(moduleId) { // eslint-disable-line no-unused-vars
/******/ 		var me = installedModules[moduleId];
/******/ 		if(!me) return __webpack_require__;
/******/ 		var fn = function(request) {
/******/ 			if(me.hot.active) {
/******/ 				if(installedModules[request]) {
/******/ 					if(installedModules[request].parents.indexOf(moduleId) < 0)
/******/ 						installedModules[request].parents.push(moduleId);
/******/ 				} else {
/******/ 					hotCurrentParents = [moduleId];
/******/ 					hotCurrentChildModule = request;
/******/ 				}
/******/ 				if(me.children.indexOf(request) < 0)
/******/ 					me.children.push(request);
/******/ 			} else {
/******/ 				console.warn("[HMR] unexpected require(" + request + ") from disposed module " + moduleId);
/******/ 				hotCurrentParents = [];
/******/ 			}
/******/ 			return __webpack_require__(request);
/******/ 		};
/******/ 		var ObjectFactory = function ObjectFactory(name) {
/******/ 			return {
/******/ 				configurable: true,
/******/ 				enumerable: true,
/******/ 				get: function() {
/******/ 					return __webpack_require__[name];
/******/ 				},
/******/ 				set: function(value) {
/******/ 					__webpack_require__[name] = value;
/******/ 				}
/******/ 			};
/******/ 		};
/******/ 		for(var name in __webpack_require__) {
/******/ 			if(Object.prototype.hasOwnProperty.call(__webpack_require__, name) && name !== "e") {
/******/ 				Object.defineProperty(fn, name, ObjectFactory(name));
/******/ 			}
/******/ 		}
/******/ 		fn.e = function(chunkId) {
/******/ 			if(hotStatus === "ready")
/******/ 				hotSetStatus("prepare");
/******/ 			hotChunksLoading++;
/******/ 			return __webpack_require__.e(chunkId).then(finishChunkLoading, function(err) {
/******/ 				finishChunkLoading();
/******/ 				throw err;
/******/ 			});
/******/ 	
/******/ 			function finishChunkLoading() {
/******/ 				hotChunksLoading--;
/******/ 				if(hotStatus === "prepare") {
/******/ 					if(!hotWaitingFilesMap[chunkId]) {
/******/ 						hotEnsureUpdateChunk(chunkId);
/******/ 					}
/******/ 					if(hotChunksLoading === 0 && hotWaitingFiles === 0) {
/******/ 						hotUpdateDownloaded();
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 		return fn;
/******/ 	}
/******/ 	
/******/ 	function hotCreateModule(moduleId) { // eslint-disable-line no-unused-vars
/******/ 		var hot = {
/******/ 			// private stuff
/******/ 			_acceptedDependencies: {},
/******/ 			_declinedDependencies: {},
/******/ 			_selfAccepted: false,
/******/ 			_selfDeclined: false,
/******/ 			_disposeHandlers: [],
/******/ 			_main: hotCurrentChildModule !== moduleId,
/******/ 	
/******/ 			// Module API
/******/ 			active: true,
/******/ 			accept: function(dep, callback) {
/******/ 				if(typeof dep === "undefined")
/******/ 					hot._selfAccepted = true;
/******/ 				else if(typeof dep === "function")
/******/ 					hot._selfAccepted = dep;
/******/ 				else if(typeof dep === "object")
/******/ 					for(var i = 0; i < dep.length; i++)
/******/ 						hot._acceptedDependencies[dep[i]] = callback || function() {};
/******/ 				else
/******/ 					hot._acceptedDependencies[dep] = callback || function() {};
/******/ 			},
/******/ 			decline: function(dep) {
/******/ 				if(typeof dep === "undefined")
/******/ 					hot._selfDeclined = true;
/******/ 				else if(typeof dep === "object")
/******/ 					for(var i = 0; i < dep.length; i++)
/******/ 						hot._declinedDependencies[dep[i]] = true;
/******/ 				else
/******/ 					hot._declinedDependencies[dep] = true;
/******/ 			},
/******/ 			dispose: function(callback) {
/******/ 				hot._disposeHandlers.push(callback);
/******/ 			},
/******/ 			addDisposeHandler: function(callback) {
/******/ 				hot._disposeHandlers.push(callback);
/******/ 			},
/******/ 			removeDisposeHandler: function(callback) {
/******/ 				var idx = hot._disposeHandlers.indexOf(callback);
/******/ 				if(idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 			},
/******/ 	
/******/ 			// Management API
/******/ 			check: hotCheck,
/******/ 			apply: hotApply,
/******/ 			status: function(l) {
/******/ 				if(!l) return hotStatus;
/******/ 				hotStatusHandlers.push(l);
/******/ 			},
/******/ 			addStatusHandler: function(l) {
/******/ 				hotStatusHandlers.push(l);
/******/ 			},
/******/ 			removeStatusHandler: function(l) {
/******/ 				var idx = hotStatusHandlers.indexOf(l);
/******/ 				if(idx >= 0) hotStatusHandlers.splice(idx, 1);
/******/ 			},
/******/ 	
/******/ 			//inherit from previous dispose call
/******/ 			data: hotCurrentModuleData[moduleId]
/******/ 		};
/******/ 		hotCurrentChildModule = undefined;
/******/ 		return hot;
/******/ 	}
/******/ 	
/******/ 	var hotStatusHandlers = [];
/******/ 	var hotStatus = "idle";
/******/ 	
/******/ 	function hotSetStatus(newStatus) {
/******/ 		hotStatus = newStatus;
/******/ 		for(var i = 0; i < hotStatusHandlers.length; i++)
/******/ 			hotStatusHandlers[i].call(null, newStatus);
/******/ 	}
/******/ 	
/******/ 	// while downloading
/******/ 	var hotWaitingFiles = 0;
/******/ 	var hotChunksLoading = 0;
/******/ 	var hotWaitingFilesMap = {};
/******/ 	var hotRequestedFilesMap = {};
/******/ 	var hotAvailableFilesMap = {};
/******/ 	var hotDeferred;
/******/ 	
/******/ 	// The update info
/******/ 	var hotUpdate, hotUpdateNewHash;
/******/ 	
/******/ 	function toModuleId(id) {
/******/ 		var isNumber = (+id) + "" === id;
/******/ 		return isNumber ? +id : id;
/******/ 	}
/******/ 	
/******/ 	function hotCheck(apply) {
/******/ 		if(hotStatus !== "idle") throw new Error("check() is only allowed in idle status");
/******/ 		hotApplyOnUpdate = apply;
/******/ 		hotSetStatus("check");
/******/ 		return hotDownloadManifest(hotRequestTimeout).then(function(update) {
/******/ 			if(!update) {
/******/ 				hotSetStatus("idle");
/******/ 				return null;
/******/ 			}
/******/ 			hotRequestedFilesMap = {};
/******/ 			hotWaitingFilesMap = {};
/******/ 			hotAvailableFilesMap = update.c;
/******/ 			hotUpdateNewHash = update.h;
/******/ 	
/******/ 			hotSetStatus("prepare");
/******/ 			var promise = new Promise(function(resolve, reject) {
/******/ 				hotDeferred = {
/******/ 					resolve: resolve,
/******/ 					reject: reject
/******/ 				};
/******/ 			});
/******/ 			hotUpdate = {};
/******/ 			var chunkId = 0;
/******/ 			{ // eslint-disable-line no-lone-blocks
/******/ 				/*globals chunkId */
/******/ 				hotEnsureUpdateChunk(chunkId);
/******/ 			}
/******/ 			if(hotStatus === "prepare" && hotChunksLoading === 0 && hotWaitingFiles === 0) {
/******/ 				hotUpdateDownloaded();
/******/ 			}
/******/ 			return promise;
/******/ 		});
/******/ 	}
/******/ 	
/******/ 	function hotAddUpdateChunk(chunkId, moreModules) { // eslint-disable-line no-unused-vars
/******/ 		if(!hotAvailableFilesMap[chunkId] || !hotRequestedFilesMap[chunkId])
/******/ 			return;
/******/ 		hotRequestedFilesMap[chunkId] = false;
/******/ 		for(var moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				hotUpdate[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(--hotWaitingFiles === 0 && hotChunksLoading === 0) {
/******/ 			hotUpdateDownloaded();
/******/ 		}
/******/ 	}
/******/ 	
/******/ 	function hotEnsureUpdateChunk(chunkId) {
/******/ 		if(!hotAvailableFilesMap[chunkId]) {
/******/ 			hotWaitingFilesMap[chunkId] = true;
/******/ 		} else {
/******/ 			hotRequestedFilesMap[chunkId] = true;
/******/ 			hotWaitingFiles++;
/******/ 			hotDownloadUpdateChunk(chunkId);
/******/ 		}
/******/ 	}
/******/ 	
/******/ 	function hotUpdateDownloaded() {
/******/ 		hotSetStatus("ready");
/******/ 		var deferred = hotDeferred;
/******/ 		hotDeferred = null;
/******/ 		if(!deferred) return;
/******/ 		if(hotApplyOnUpdate) {
/******/ 			// Wrap deferred object in Promise to mark it as a well-handled Promise to
/******/ 			// avoid triggering uncaught exception warning in Chrome.
/******/ 			// See https://bugs.chromium.org/p/chromium/issues/detail?id=465666
/******/ 			Promise.resolve().then(function() {
/******/ 				return hotApply(hotApplyOnUpdate);
/******/ 			}).then(
/******/ 				function(result) {
/******/ 					deferred.resolve(result);
/******/ 				},
/******/ 				function(err) {
/******/ 					deferred.reject(err);
/******/ 				}
/******/ 			);
/******/ 		} else {
/******/ 			var outdatedModules = [];
/******/ 			for(var id in hotUpdate) {
/******/ 				if(Object.prototype.hasOwnProperty.call(hotUpdate, id)) {
/******/ 					outdatedModules.push(toModuleId(id));
/******/ 				}
/******/ 			}
/******/ 			deferred.resolve(outdatedModules);
/******/ 		}
/******/ 	}
/******/ 	
/******/ 	function hotApply(options) {
/******/ 		if(hotStatus !== "ready") throw new Error("apply() is only allowed in ready status");
/******/ 		options = options || {};
/******/ 	
/******/ 		var cb;
/******/ 		var i;
/******/ 		var j;
/******/ 		var module;
/******/ 		var moduleId;
/******/ 	
/******/ 		function getAffectedStuff(updateModuleId) {
/******/ 			var outdatedModules = [updateModuleId];
/******/ 			var outdatedDependencies = {};
/******/ 	
/******/ 			var queue = outdatedModules.slice().map(function(id) {
/******/ 				return {
/******/ 					chain: [id],
/******/ 					id: id
/******/ 				};
/******/ 			});
/******/ 			while(queue.length > 0) {
/******/ 				var queueItem = queue.pop();
/******/ 				var moduleId = queueItem.id;
/******/ 				var chain = queueItem.chain;
/******/ 				module = installedModules[moduleId];
/******/ 				if(!module || module.hot._selfAccepted)
/******/ 					continue;
/******/ 				if(module.hot._selfDeclined) {
/******/ 					return {
/******/ 						type: "self-declined",
/******/ 						chain: chain,
/******/ 						moduleId: moduleId
/******/ 					};
/******/ 				}
/******/ 				if(module.hot._main) {
/******/ 					return {
/******/ 						type: "unaccepted",
/******/ 						chain: chain,
/******/ 						moduleId: moduleId
/******/ 					};
/******/ 				}
/******/ 				for(var i = 0; i < module.parents.length; i++) {
/******/ 					var parentId = module.parents[i];
/******/ 					var parent = installedModules[parentId];
/******/ 					if(!parent) continue;
/******/ 					if(parent.hot._declinedDependencies[moduleId]) {
/******/ 						return {
/******/ 							type: "declined",
/******/ 							chain: chain.concat([parentId]),
/******/ 							moduleId: moduleId,
/******/ 							parentId: parentId
/******/ 						};
/******/ 					}
/******/ 					if(outdatedModules.indexOf(parentId) >= 0) continue;
/******/ 					if(parent.hot._acceptedDependencies[moduleId]) {
/******/ 						if(!outdatedDependencies[parentId])
/******/ 							outdatedDependencies[parentId] = [];
/******/ 						addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 						continue;
/******/ 					}
/******/ 					delete outdatedDependencies[parentId];
/******/ 					outdatedModules.push(parentId);
/******/ 					queue.push({
/******/ 						chain: chain.concat([parentId]),
/******/ 						id: parentId
/******/ 					});
/******/ 				}
/******/ 			}
/******/ 	
/******/ 			return {
/******/ 				type: "accepted",
/******/ 				moduleId: updateModuleId,
/******/ 				outdatedModules: outdatedModules,
/******/ 				outdatedDependencies: outdatedDependencies
/******/ 			};
/******/ 		}
/******/ 	
/******/ 		function addAllToSet(a, b) {
/******/ 			for(var i = 0; i < b.length; i++) {
/******/ 				var item = b[i];
/******/ 				if(a.indexOf(item) < 0)
/******/ 					a.push(item);
/******/ 			}
/******/ 		}
/******/ 	
/******/ 		// at begin all updates modules are outdated
/******/ 		// the "outdated" status can propagate to parents if they don't accept the children
/******/ 		var outdatedDependencies = {};
/******/ 		var outdatedModules = [];
/******/ 		var appliedUpdate = {};
/******/ 	
/******/ 		var warnUnexpectedRequire = function warnUnexpectedRequire() {
/******/ 			console.warn("[HMR] unexpected require(" + result.moduleId + ") to disposed module");
/******/ 		};
/******/ 	
/******/ 		for(var id in hotUpdate) {
/******/ 			if(Object.prototype.hasOwnProperty.call(hotUpdate, id)) {
/******/ 				moduleId = toModuleId(id);
/******/ 				var result;
/******/ 				if(hotUpdate[id]) {
/******/ 					result = getAffectedStuff(moduleId);
/******/ 				} else {
/******/ 					result = {
/******/ 						type: "disposed",
/******/ 						moduleId: id
/******/ 					};
/******/ 				}
/******/ 				var abortError = false;
/******/ 				var doApply = false;
/******/ 				var doDispose = false;
/******/ 				var chainInfo = "";
/******/ 				if(result.chain) {
/******/ 					chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 				}
/******/ 				switch(result.type) {
/******/ 					case "self-declined":
/******/ 						if(options.onDeclined)
/******/ 							options.onDeclined(result);
/******/ 						if(!options.ignoreDeclined)
/******/ 							abortError = new Error("Aborted because of self decline: " + result.moduleId + chainInfo);
/******/ 						break;
/******/ 					case "declined":
/******/ 						if(options.onDeclined)
/******/ 							options.onDeclined(result);
/******/ 						if(!options.ignoreDeclined)
/******/ 							abortError = new Error("Aborted because of declined dependency: " + result.moduleId + " in " + result.parentId + chainInfo);
/******/ 						break;
/******/ 					case "unaccepted":
/******/ 						if(options.onUnaccepted)
/******/ 							options.onUnaccepted(result);
/******/ 						if(!options.ignoreUnaccepted)
/******/ 							abortError = new Error("Aborted because " + moduleId + " is not accepted" + chainInfo);
/******/ 						break;
/******/ 					case "accepted":
/******/ 						if(options.onAccepted)
/******/ 							options.onAccepted(result);
/******/ 						doApply = true;
/******/ 						break;
/******/ 					case "disposed":
/******/ 						if(options.onDisposed)
/******/ 							options.onDisposed(result);
/******/ 						doDispose = true;
/******/ 						break;
/******/ 					default:
/******/ 						throw new Error("Unexception type " + result.type);
/******/ 				}
/******/ 				if(abortError) {
/******/ 					hotSetStatus("abort");
/******/ 					return Promise.reject(abortError);
/******/ 				}
/******/ 				if(doApply) {
/******/ 					appliedUpdate[moduleId] = hotUpdate[moduleId];
/******/ 					addAllToSet(outdatedModules, result.outdatedModules);
/******/ 					for(moduleId in result.outdatedDependencies) {
/******/ 						if(Object.prototype.hasOwnProperty.call(result.outdatedDependencies, moduleId)) {
/******/ 							if(!outdatedDependencies[moduleId])
/******/ 								outdatedDependencies[moduleId] = [];
/******/ 							addAllToSet(outdatedDependencies[moduleId], result.outdatedDependencies[moduleId]);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 				if(doDispose) {
/******/ 					addAllToSet(outdatedModules, [result.moduleId]);
/******/ 					appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 	
/******/ 		// Store self accepted outdated modules to require them later by the module system
/******/ 		var outdatedSelfAcceptedModules = [];
/******/ 		for(i = 0; i < outdatedModules.length; i++) {
/******/ 			moduleId = outdatedModules[i];
/******/ 			if(installedModules[moduleId] && installedModules[moduleId].hot._selfAccepted)
/******/ 				outdatedSelfAcceptedModules.push({
/******/ 					module: moduleId,
/******/ 					errorHandler: installedModules[moduleId].hot._selfAccepted
/******/ 				});
/******/ 		}
/******/ 	
/******/ 		// Now in "dispose" phase
/******/ 		hotSetStatus("dispose");
/******/ 		Object.keys(hotAvailableFilesMap).forEach(function(chunkId) {
/******/ 			if(hotAvailableFilesMap[chunkId] === false) {
/******/ 				hotDisposeChunk(chunkId);
/******/ 			}
/******/ 		});
/******/ 	
/******/ 		var idx;
/******/ 		var queue = outdatedModules.slice();
/******/ 		while(queue.length > 0) {
/******/ 			moduleId = queue.pop();
/******/ 			module = installedModules[moduleId];
/******/ 			if(!module) continue;
/******/ 	
/******/ 			var data = {};
/******/ 	
/******/ 			// Call dispose handlers
/******/ 			var disposeHandlers = module.hot._disposeHandlers;
/******/ 			for(j = 0; j < disposeHandlers.length; j++) {
/******/ 				cb = disposeHandlers[j];
/******/ 				cb(data);
/******/ 			}
/******/ 			hotCurrentModuleData[moduleId] = data;
/******/ 	
/******/ 			// disable module (this disables requires from this module)
/******/ 			module.hot.active = false;
/******/ 	
/******/ 			// remove module from cache
/******/ 			delete installedModules[moduleId];
/******/ 	
/******/ 			// remove "parents" references from all children
/******/ 			for(j = 0; j < module.children.length; j++) {
/******/ 				var child = installedModules[module.children[j]];
/******/ 				if(!child) continue;
/******/ 				idx = child.parents.indexOf(moduleId);
/******/ 				if(idx >= 0) {
/******/ 					child.parents.splice(idx, 1);
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 	
/******/ 		// remove outdated dependency from module children
/******/ 		var dependency;
/******/ 		var moduleOutdatedDependencies;
/******/ 		for(moduleId in outdatedDependencies) {
/******/ 			if(Object.prototype.hasOwnProperty.call(outdatedDependencies, moduleId)) {
/******/ 				module = installedModules[moduleId];
/******/ 				if(module) {
/******/ 					moduleOutdatedDependencies = outdatedDependencies[moduleId];
/******/ 					for(j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 						dependency = moduleOutdatedDependencies[j];
/******/ 						idx = module.children.indexOf(dependency);
/******/ 						if(idx >= 0) module.children.splice(idx, 1);
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 	
/******/ 		// Not in "apply" phase
/******/ 		hotSetStatus("apply");
/******/ 	
/******/ 		hotCurrentHash = hotUpdateNewHash;
/******/ 	
/******/ 		// insert new code
/******/ 		for(moduleId in appliedUpdate) {
/******/ 			if(Object.prototype.hasOwnProperty.call(appliedUpdate, moduleId)) {
/******/ 				modules[moduleId] = appliedUpdate[moduleId];
/******/ 			}
/******/ 		}
/******/ 	
/******/ 		// call accept handlers
/******/ 		var error = null;
/******/ 		for(moduleId in outdatedDependencies) {
/******/ 			if(Object.prototype.hasOwnProperty.call(outdatedDependencies, moduleId)) {
/******/ 				module = installedModules[moduleId];
/******/ 				moduleOutdatedDependencies = outdatedDependencies[moduleId];
/******/ 				var callbacks = [];
/******/ 				for(i = 0; i < moduleOutdatedDependencies.length; i++) {
/******/ 					dependency = moduleOutdatedDependencies[i];
/******/ 					cb = module.hot._acceptedDependencies[dependency];
/******/ 					if(callbacks.indexOf(cb) >= 0) continue;
/******/ 					callbacks.push(cb);
/******/ 				}
/******/ 				for(i = 0; i < callbacks.length; i++) {
/******/ 					cb = callbacks[i];
/******/ 					try {
/******/ 						cb(moduleOutdatedDependencies);
/******/ 					} catch(err) {
/******/ 						if(options.onErrored) {
/******/ 							options.onErrored({
/******/ 								type: "accept-errored",
/******/ 								moduleId: moduleId,
/******/ 								dependencyId: moduleOutdatedDependencies[i],
/******/ 								error: err
/******/ 							});
/******/ 						}
/******/ 						if(!options.ignoreErrored) {
/******/ 							if(!error)
/******/ 								error = err;
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 	
/******/ 		// Load self accepted modules
/******/ 		for(i = 0; i < outdatedSelfAcceptedModules.length; i++) {
/******/ 			var item = outdatedSelfAcceptedModules[i];
/******/ 			moduleId = item.module;
/******/ 			hotCurrentParents = [moduleId];
/******/ 			try {
/******/ 				__webpack_require__(moduleId);
/******/ 			} catch(err) {
/******/ 				if(typeof item.errorHandler === "function") {
/******/ 					try {
/******/ 						item.errorHandler(err);
/******/ 					} catch(err2) {
/******/ 						if(options.onErrored) {
/******/ 							options.onErrored({
/******/ 								type: "self-accept-error-handler-errored",
/******/ 								moduleId: moduleId,
/******/ 								error: err2,
/******/ 								orginalError: err
/******/ 							});
/******/ 						}
/******/ 						if(!options.ignoreErrored) {
/******/ 							if(!error)
/******/ 								error = err2;
/******/ 						}
/******/ 						if(!error)
/******/ 							error = err;
/******/ 					}
/******/ 				} else {
/******/ 					if(options.onErrored) {
/******/ 						options.onErrored({
/******/ 							type: "self-accept-errored",
/******/ 							moduleId: moduleId,
/******/ 							error: err
/******/ 						});
/******/ 					}
/******/ 					if(!options.ignoreErrored) {
/******/ 						if(!error)
/******/ 							error = err;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 	
/******/ 		// handle errors in accept handlers and self accepted module load
/******/ 		if(error) {
/******/ 			hotSetStatus("fail");
/******/ 			return Promise.reject(error);
/******/ 		}
/******/ 	
/******/ 		hotSetStatus("idle");
/******/ 		return new Promise(function(resolve) {
/******/ 			resolve(outdatedModules);
/******/ 		});
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {},
/******/ 			hot: hotCreateModule(moduleId),
/******/ 			parents: (hotCurrentParentsTemp = hotCurrentParents, hotCurrentParents = [], hotCurrentParentsTemp),
/******/ 			children: []
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, hotCreateRequire(moduleId));
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "http://localhost:3001/";
/******/
/******/ 	// __webpack_hash__
/******/ 	__webpack_require__.h = function() { return hotCurrentHash; };
/******/
/******/ 	// Load entry module and return exports
/******/ 	return hotCreateRequire(0)(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./build/assets.json":
/***/ (function(module, exports) {

module.exports = {"client":{"js":"http://localhost:3001/static/js/bundle.js"}}

/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "./node_modules/medium-draft/lib/index.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(undefined);
// imports


// module
exports.push([module.i, "/*!\n * medium-draft\n * Version - 0.6.0-beta1\n * Author - Brijesh Bittu <brijeshb42@gmail.com> (http://bitwiser.in/)\n */\n.DraftEditor-editorContainer,.DraftEditor-root,.public-DraftEditor-content{height:inherit;text-align:initial}.public-DraftEditor-content[contenteditable=true]{-webkit-user-modify:read-write-plaintext-only}.DraftEditor-root{position:relative}.DraftEditor-editorContainer{background-color:hsla(0,0%,100%,0);border-left:.1px solid transparent;position:relative;z-index:1}.public-DraftEditor-block{position:relative}.DraftEditor-alignLeft .public-DraftStyleDefault-block{text-align:left}.DraftEditor-alignLeft .public-DraftEditorPlaceholder-root{left:0;text-align:left}.DraftEditor-alignCenter .public-DraftStyleDefault-block{text-align:center}.DraftEditor-alignCenter .public-DraftEditorPlaceholder-root{margin:0 auto;text-align:center;width:100%}.DraftEditor-alignRight .public-DraftStyleDefault-block{text-align:right}.DraftEditor-alignRight .public-DraftEditorPlaceholder-root{right:0;text-align:right}.public-DraftEditorPlaceholder-root{color:#9197a3;position:absolute;z-index:1}.public-DraftEditorPlaceholder-hasFocus{color:#bdc1c9}.DraftEditorPlaceholder-hidden{display:none}.public-DraftStyleDefault-block{position:relative;white-space:pre-wrap}.public-DraftStyleDefault-ltr{direction:ltr;text-align:left}.public-DraftStyleDefault-rtl{direction:rtl;text-align:right}.public-DraftStyleDefault-listLTR{direction:ltr}.public-DraftStyleDefault-listRTL{direction:rtl}.public-DraftStyleDefault-ol,.public-DraftStyleDefault-ul{margin:16px 0;padding:0}.public-DraftStyleDefault-depth0.public-DraftStyleDefault-listLTR{margin-left:1.5em}.public-DraftStyleDefault-depth0.public-DraftStyleDefault-listRTL{margin-right:1.5em}.public-DraftStyleDefault-depth1.public-DraftStyleDefault-listLTR{margin-left:3em}.public-DraftStyleDefault-depth1.public-DraftStyleDefault-listRTL{margin-right:3em}.public-DraftStyleDefault-depth2.public-DraftStyleDefault-listLTR{margin-left:4.5em}.public-DraftStyleDefault-depth2.public-DraftStyleDefault-listRTL{margin-right:4.5em}.public-DraftStyleDefault-depth3.public-DraftStyleDefault-listLTR{margin-left:6em}.public-DraftStyleDefault-depth3.public-DraftStyleDefault-listRTL{margin-right:6em}.public-DraftStyleDefault-depth4.public-DraftStyleDefault-listLTR{margin-left:7.5em}.public-DraftStyleDefault-depth4.public-DraftStyleDefault-listRTL{margin-right:7.5em}.public-DraftStyleDefault-unorderedListItem{list-style-type:square;position:relative}.public-DraftStyleDefault-unorderedListItem.public-DraftStyleDefault-depth0{list-style-type:disc}.public-DraftStyleDefault-unorderedListItem.public-DraftStyleDefault-depth1{list-style-type:circle}.public-DraftStyleDefault-orderedListItem{list-style-type:none;position:relative}.public-DraftStyleDefault-orderedListItem.public-DraftStyleDefault-listLTR:before{left:-36px;position:absolute;text-align:right;width:30px}.public-DraftStyleDefault-orderedListItem.public-DraftStyleDefault-listRTL:before{position:absolute;right:-36px;text-align:left;width:30px}.public-DraftStyleDefault-orderedListItem:before{content:counter(ol0) \". \";counter-increment:ol0}.public-DraftStyleDefault-orderedListItem.public-DraftStyleDefault-depth1:before{content:counter(ol1) \". \";counter-increment:ol1}.public-DraftStyleDefault-orderedListItem.public-DraftStyleDefault-depth2:before{content:counter(ol2) \". \";counter-increment:ol2}.public-DraftStyleDefault-orderedListItem.public-DraftStyleDefault-depth3:before{content:counter(ol3) \". \";counter-increment:ol3}.public-DraftStyleDefault-orderedListItem.public-DraftStyleDefault-depth4:before{content:counter(ol4) \". \";counter-increment:ol4}.public-DraftStyleDefault-depth0.public-DraftStyleDefault-reset{counter-reset:ol0}.public-DraftStyleDefault-depth1.public-DraftStyleDefault-reset{counter-reset:ol1}.public-DraftStyleDefault-depth2.public-DraftStyleDefault-reset{counter-reset:ol2}.public-DraftStyleDefault-depth3.public-DraftStyleDefault-reset{counter-reset:ol3}.public-DraftStyleDefault-depth4.public-DraftStyleDefault-reset{counter-reset:ol4}/*! Hint.css - v2.5.0 - 2017-04-23\n* http://kushagragour.in/lab/hint/\n* Copyright (c) 2017 Kushagra Gour */[class*=hint--]{position:relative;display:inline-block}[class*=hint--]:after,[class*=hint--]:before{position:absolute;-webkit-transform:translateZ(0);transform:translateZ(0);visibility:hidden;opacity:0;z-index:1000000;pointer-events:none;transition:.3s ease;transition-delay:0s}[class*=hint--]:hover:after,[class*=hint--]:hover:before{visibility:visible;opacity:1;transition-delay:.1s}[class*=hint--]:before{content:\"\";position:absolute;background:0 0;border:6px solid transparent;z-index:1000001}[class*=hint--]:after{background:#383838;color:#fff;padding:8px 10px;font-size:12px;font-family:Helvetica Neue,Helvetica,Arial,sans-serif;line-height:12px;white-space:nowrap;text-shadow:0 -1px 0 #000;box-shadow:4px 4px 8px rgba(0,0,0,.3)}[class*=hint--][aria-label]:after{content:attr(aria-label)}[class*=hint--][data-hint]:after{content:attr(data-hint)}[aria-label=\"\"]:after,[aria-label=\"\"]:before,[data-hint=\"\"]:after,[data-hint=\"\"]:before{display:none!important}.hint--top-left:before,.hint--top-right:before,.hint--top:before{border-top-color:#383838}.hint--bottom-left:before,.hint--bottom-right:before,.hint--bottom:before{border-bottom-color:#383838}.hint--top:after,.hint--top:before{bottom:100%;left:50%}.hint--top:before{margin-bottom:-11px;left:calc(50% - 6px)}.hint--top:after{-webkit-transform:translateX(-50%);transform:translateX(-50%)}.hint--top:hover:before{-webkit-transform:translateY(-8px);transform:translateY(-8px)}.hint--top:hover:after{-webkit-transform:translateX(-50%) translateY(-8px);transform:translateX(-50%) translateY(-8px)}.hint--bottom:after,.hint--bottom:before{top:100%;left:50%}.hint--bottom:before{margin-top:-11px;left:calc(50% - 6px)}.hint--bottom:after{-webkit-transform:translateX(-50%);transform:translateX(-50%)}.hint--bottom:hover:before{-webkit-transform:translateY(8px);transform:translateY(8px)}.hint--bottom:hover:after{-webkit-transform:translateX(-50%) translateY(8px);transform:translateX(-50%) translateY(8px)}.hint--right:before{border-right-color:#383838;margin-left:-11px;margin-bottom:-6px}.hint--right:after{margin-bottom:-14px}.hint--right:after,.hint--right:before{left:100%;bottom:50%}.hint--right:hover:after,.hint--right:hover:before{-webkit-transform:translateX(8px);transform:translateX(8px)}.hint--left:before{border-left-color:#383838;margin-right:-11px;margin-bottom:-6px}.hint--left:after{margin-bottom:-14px}.hint--left:after,.hint--left:before{right:100%;bottom:50%}.hint--left:hover:after,.hint--left:hover:before{-webkit-transform:translateX(-8px);transform:translateX(-8px)}.hint--top-left:after,.hint--top-left:before{bottom:100%;left:50%}.hint--top-left:before{margin-bottom:-11px;left:calc(50% - 6px)}.hint--top-left:after{-webkit-transform:translateX(-100%);transform:translateX(-100%);margin-left:12px}.hint--top-left:hover:before{-webkit-transform:translateY(-8px);transform:translateY(-8px)}.hint--top-left:hover:after{-webkit-transform:translateX(-100%) translateY(-8px);transform:translateX(-100%) translateY(-8px)}.hint--top-right:after,.hint--top-right:before{bottom:100%;left:50%}.hint--top-right:before{margin-bottom:-11px;left:calc(50% - 6px)}.hint--top-right:after{-webkit-transform:translateX(0);transform:translateX(0);margin-left:-12px}.hint--top-right:hover:after,.hint--top-right:hover:before{-webkit-transform:translateY(-8px);transform:translateY(-8px)}.hint--bottom-left:after,.hint--bottom-left:before{top:100%;left:50%}.hint--bottom-left:before{margin-top:-11px;left:calc(50% - 6px)}.hint--bottom-left:after{-webkit-transform:translateX(-100%);transform:translateX(-100%);margin-left:12px}.hint--bottom-left:hover:before{-webkit-transform:translateY(8px);transform:translateY(8px)}.hint--bottom-left:hover:after{-webkit-transform:translateX(-100%) translateY(8px);transform:translateX(-100%) translateY(8px)}.hint--bottom-right:after,.hint--bottom-right:before{top:100%;left:50%}.hint--bottom-right:before{margin-top:-11px;left:calc(50% - 6px)}.hint--bottom-right:after{-webkit-transform:translateX(0);transform:translateX(0);margin-left:-12px}.hint--bottom-right:hover:after,.hint--bottom-right:hover:before{-webkit-transform:translateY(8px);transform:translateY(8px)}.hint--large:after,.hint--medium:after,.hint--small:after{white-space:normal;line-height:1.4em;word-wrap:break-word}.hint--small:after{width:80px}.hint--medium:after{width:150px}.hint--large:after{width:300px}.hint--error:after{background-color:#b34e4d;text-shadow:0 -1px 0 #592726}.hint--error.hint--top-left:before,.hint--error.hint--top-right:before,.hint--error.hint--top:before{border-top-color:#b34e4d}.hint--error.hint--bottom-left:before,.hint--error.hint--bottom-right:before,.hint--error.hint--bottom:before{border-bottom-color:#b34e4d}.hint--error.hint--left:before{border-left-color:#b34e4d}.hint--error.hint--right:before{border-right-color:#b34e4d}.hint--warning:after{background-color:#c09854;text-shadow:0 -1px 0 #6c5328}.hint--warning.hint--top-left:before,.hint--warning.hint--top-right:before,.hint--warning.hint--top:before{border-top-color:#c09854}.hint--warning.hint--bottom-left:before,.hint--warning.hint--bottom-right:before,.hint--warning.hint--bottom:before{border-bottom-color:#c09854}.hint--warning.hint--left:before{border-left-color:#c09854}.hint--warning.hint--right:before{border-right-color:#c09854}.hint--info:after{background-color:#3986ac;text-shadow:0 -1px 0 #1a3c4d}.hint--info.hint--top-left:before,.hint--info.hint--top-right:before,.hint--info.hint--top:before{border-top-color:#3986ac}.hint--info.hint--bottom-left:before,.hint--info.hint--bottom-right:before,.hint--info.hint--bottom:before{border-bottom-color:#3986ac}.hint--info.hint--left:before{border-left-color:#3986ac}.hint--info.hint--right:before{border-right-color:#3986ac}.hint--success:after{background-color:#458746;text-shadow:0 -1px 0 #1a321a}.hint--success.hint--top-left:before,.hint--success.hint--top-right:before,.hint--success.hint--top:before{border-top-color:#458746}.hint--success.hint--bottom-left:before,.hint--success.hint--bottom-right:before,.hint--success.hint--bottom:before{border-bottom-color:#458746}.hint--success.hint--left:before{border-left-color:#458746}.hint--success.hint--right:before{border-right-color:#458746}.hint--always:after,.hint--always:before{opacity:1;visibility:visible}.hint--always.hint--top:before{-webkit-transform:translateY(-8px);transform:translateY(-8px)}.hint--always.hint--top:after{-webkit-transform:translateX(-50%) translateY(-8px);transform:translateX(-50%) translateY(-8px)}.hint--always.hint--top-left:before{-webkit-transform:translateY(-8px);transform:translateY(-8px)}.hint--always.hint--top-left:after{-webkit-transform:translateX(-100%) translateY(-8px);transform:translateX(-100%) translateY(-8px)}.hint--always.hint--top-right:after,.hint--always.hint--top-right:before{-webkit-transform:translateY(-8px);transform:translateY(-8px)}.hint--always.hint--bottom:before{-webkit-transform:translateY(8px);transform:translateY(8px)}.hint--always.hint--bottom:after{-webkit-transform:translateX(-50%) translateY(8px);transform:translateX(-50%) translateY(8px)}.hint--always.hint--bottom-left:before{-webkit-transform:translateY(8px);transform:translateY(8px)}.hint--always.hint--bottom-left:after{-webkit-transform:translateX(-100%) translateY(8px);transform:translateX(-100%) translateY(8px)}.hint--always.hint--bottom-right:after,.hint--always.hint--bottom-right:before{-webkit-transform:translateY(8px);transform:translateY(8px)}.hint--always.hint--left:after,.hint--always.hint--left:before{-webkit-transform:translateX(-8px);transform:translateX(-8px)}.hint--always.hint--right:after,.hint--always.hint--right:before{-webkit-transform:translateX(8px);transform:translateX(8px)}.hint--rounded:after{border-radius:4px}.hint--no-animate:after,.hint--no-animate:before{transition-duration:0s}.hint--bounce:after,.hint--bounce:before{transition:opacity .3s ease,visibility .3s ease,transform .3s cubic-bezier(.71,1.7,.77,1.24)}.md-RichEditor-root{background:#fff;box-sizing:border-box;padding:15px 30px;position:relative;line-height:1.4em}.md-RichEditor-editor{cursor:text;margin-top:10px;position:relative;margin:0 auto}.md-RichEditor-editor h3{font-size:1.3em;margin:1.2em 0}.md-RichEditor-editor .public-DraftEditor-content,.md-RichEditor-editor .public-DraftEditorPlaceholder-root{margin:0 -15px -15px;padding:15px}.md-RichEditor-editor .public-DraftEditor-content{min-height:100px}.md-RichEditor-hidePlaceholder .public-DraftEditorPlaceholder-root{display:none}.md-RichEditor-editor .md-RichEditor-blockquote{border-left:5px solid #4ca8de;color:#555;font-size:1.2em;margin:0;padding:10px 0 10px 20px;background-color:#e2f2ff}.md-RichEditor-blockquote a{text-decoration:underline}.public-DraftEditor-content .md-block:first-child{margin-top:0;padding-top:0}.md-RichEditor-editor .public-DraftStyleDefault-pre{background-color:rgba(0,0,0,.05);font-size:16px;padding:20px}.public-DraftStyleDefault-orderedListItem,.public-DraftStyleDefault-unorderedListItem{margin-bottom:10px}.md-editor-action{position:fixed;top:5px;left:5px}.md-editor-action button{display:block}.md-side-toolbar{position:absolute;z-index:1;left:-35px;top:0;transition:all .2s ease}.md-sb-button{background:none;border:1px solid #5b5b5b;color:#6d6d6d;cursor:pointer;height:30px;width:30px;border-radius:15px;font-weight:700;font-size:20px;margin-right:2px;text-align:center;transition:all .2s ease}.md-sb-button:focus{outline:none;border-color:#08c;color:#08c}.md-sb-button:hover{color:green}.md-sb-button.md-sb-img-button{background:none;background-color:#fff}.md-sb-button svg path{stroke-width:0;fill:#545454}.md-add-button.md-open-button{transform:rotate(45deg)}.md-example-appear{transform:translate3d(-38px,0,0);opacity:0}.md-example-appear.md-example-appear-active{transform:translateZ(0);opacity:1;transition:all .5s ease-in}.md-example-enter{transform:translate3d(-38px,0,0);opacity:0}.md-example-enter.md-example-enter-active{opacity:1;transform:translateZ(0);transition:all .5s ease-in}.md-example-leave{opacity:1}.md-example-leave.md-example-leave-active{opacity:.01;transition:opacity .3s ease-in}@keyframes pop-upwards{0%{transform:matrix(.97,0,0,1,0,12);opacity:0}20%{transform:matrix(.99,0,0,1,0,2);opacity:.7}40%{transform:matrix(1,0,0,1,0,-1);opacity:1}70%{transform:matrix(1,0,0,1,0,0);opacity:1}to{transform:matrix(1,0,0,1,0,0);opacity:1}}@keyframes pop-downwards{0%{transform:matrix(.97,0,0,1,0,-12);opacity:0}20%{transform:matrix(.99,0,0,1,0,-2);opacity:.7}40%{transform:matrix(1,0,0,1,0,1);opacity:1}70%{transform:matrix(1,0,0,1,0,0);opacity:1}to{transform:matrix(1,0,0,1,0,0);opacity:1}}.md-editor-toolbar{background:#323845;color:#fff;cursor:auto;border-radius:5px;z-index:2;position:absolute;transition:all .1s ease;visibility:hidden;box-shadow:0 1px 3px 0 #747171}.md-editor-toolbar.md-editor-toolbar--isopen{visibility:visible}.md-editor-toolbar.md-editor-toolbar--linkinput{animation:pop-downwards .2s forwards linear}.md-editor-toolbar:after{content:\"\";position:absolute;bottom:-5px;left:50%;margin-left:-5px;border-top:5px solid #323845;border-right:5px solid transparent;border-left:5px solid transparent}.md-editor-toolbar .md-url-input{box-sizing:border-box;border-radius:2px;display:block;width:100%;padding:5px;padding-right:11px;border:none;background:#323845;color:#fff;font-size:.9em;font-weight:100}.md-editor-toolbar .md-url-input:focus{outline:none}.md-editor-toolbar .md-url-input-close{position:absolute;right:8px;top:2.5px;font-size:20px;cursor:pointer}.md-editor-toolbar-edit-link{padding:4px 5px;font-size:.8em;width:320px}.md-editor-toolbar-edit-link a{color:#fff;text-decoration:none}.md-editor-toolbar-edit-link:after{bottom:auto;top:-5px;transform:rotate(180deg)}.md-editor-toolbar-edit-link button{background:none;border:none;color:#fff;float:right;display:inline-block;padding:0 5px;margin:5px 0;cursor:pointer}.md-editor-toolbar-edit-link button.md-editor-toolbar-edit-button{border-right:1px solid #fff}.md-RichEditor-controls{font-family:Helvetica,sans-serif;font-size:14px;display:inline-block;border-right:1px solid #555;position:relative}.md-RichEditor-controls.md-RichEditor-show-link-input{padding:6px 10px}.md-RichEditor-controls:last-child{border-right:none}.md-RichEditor-controls .md-RichEditor-linkButton{padding:0 5px;color:#fff;text-decoration:none}.md-RichEditor-styleButton{color:#fff;cursor:pointer;display:inline-block;padding:6px 10px}.md-RichEditor-styleButton:hover{color:#ff0}.md-RichEditor-styleButton:last-child{margin-right:0}.md-RichEditor-styleButton.md-RichEditor-styleButton-bold{font-weight:700}.md-RichEditor-styleButton.md-RichEditor-styleButton-italic{font-style:italic}.md-RichEditor-styleButton.md-RichEditor-styleButton-underline{text-decoration:underline}.md-RichEditor-styleButton.md-RichEditor-styleButton-strikethrough{text-decoration:line-through}.md-RichEditor-activeButton{color:#50ff4d;background:#242933}.md-RichEditor-activeButton:hover{color:#08c}.md-RichEditor-controls-block .md-RichEditor-styleButton:first-child{border-top-left-radius:5px;border-bottom-left-radius:5px}.public-DraftEditor-content .md-block-paragraph{margin:20px 0}.public-DraftEditor-content .md-block-paragraph:first-child{margin-top:0}.public-DraftEditor-content .md-block-paragraph:last-child{margin-bottom:0}.md-block-checkbox input[type=checkbox]{float:left;margin-right:10px}.md-block-atomic{margin:0}.md-block-atomic img{width:100%;border:1px solid #eee;box-sizing:border-box}.md-block-atomic-wrapper{position:relative}.md-block-atomic-controls{display:none;position:absolute;top:0;right:0;transition:all .2s ease}.md-block-atomic-controls button{display:inline-block;background-color:#eaeaea;border:none;color:#6d6d6d;cursor:pointer;height:22px;width:22px;border-radius:11px;position:absolute;z-index:1;left:-27px;font-weight:700;text-align:center;transition:all .2s ease}.md-block-atomic-controls button:focus{outline:none;border-color:#08c;color:#08c}.md-block-quote cite{display:block;margin:0}.md-block-quote cite:before{content:\"\\2013\";color:#999;float:left;font-weight:700;display:inline;margin-right:10px}.md-block-caption{display:block;position:relative;font-style:normal;padding:10px 0;font-family:Hoefler Text,Georgia,serif;margin:0 0 20px;background-color:#f7f7f7;border-radius:5px;line-height:1.2em}.md-block-caption:before{content:\"\\201C\";color:#c6dfff;display:inline;position:absolute;left:-25px;top:-5px;font-size:3em}.md-block-caption .public-DraftStyleDefault-ltr{text-align:center}.md-block-todo input[type=checkbox]{cursor:pointer;float:left;position:relative;top:4px;left:-4px}.md-block-todo .public-DraftStyleDefault-block{margin-left:18px}.md-block-todo .md-block-todo-completed{color:#949494;text-decoration:line-through}.md-block-image{margin:10px 0;background:#fbfbfb}.md-block-image img{cursor:default;max-width:100%;border:1px solid #eee;box-sizing:border-box}.md-block-image img.is-selected{box-shadow:0 0 0 3px #02b875}.md-block-image figcaption{display:block;font-size:14px;line-height:1.4;color:rgba(0,0,0,.6);letter-spacing:0;font-weight:300;font-style:normal;text-align:center;padding:5px 0}.md-block-image figcaption .public-DraftStyleDefault-block{text-align:center}.md-block-image .md-block-image-inner-container{position:relative}.md-block-image .md-block-image-toolbar-container{position:absolute;top:0;right:10px;cursor:pointer}", ""]);

// exports


/***/ }),

/***/ "./node_modules/razzle/node_modules/webpack/hot/log-apply-result.js":
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
module.exports = function(updatedModules, renewedModules) {
	var unacceptedModules = updatedModules.filter(function(moduleId) {
		return renewedModules && renewedModules.indexOf(moduleId) < 0;
	});
	var log = __webpack_require__("./node_modules/razzle/node_modules/webpack/hot/log.js");

	if(unacceptedModules.length > 0) {
		log("warning", "[HMR] The following modules couldn't be hot updated: (They would need a full reload!)");
		unacceptedModules.forEach(function(moduleId) {
			log("warning", "[HMR]  - " + moduleId);
		});
	}

	if(!renewedModules || renewedModules.length === 0) {
		log("info", "[HMR] Nothing hot updated.");
	} else {
		log("info", "[HMR] Updated modules:");
		renewedModules.forEach(function(moduleId) {
			if(typeof moduleId === "string" && moduleId.indexOf("!") !== -1) {
				var parts = moduleId.split("!");
				log.groupCollapsed("info", "[HMR]  - " + parts.pop());
				log("info", "[HMR]  - " + moduleId);
				log.groupEnd("info");
			} else {
				log("info", "[HMR]  - " + moduleId);
			}
		});
		var numberIds = renewedModules.every(function(moduleId) {
			return typeof moduleId === "number";
		});
		if(numberIds)
			log("info", "[HMR] Consider using the NamedModulesPlugin for module names.");
	}
};


/***/ }),

/***/ "./node_modules/razzle/node_modules/webpack/hot/log.js":
/***/ (function(module, exports) {

var logLevel = "info";

function dummy() {}

function shouldLog(level) {
	var shouldLog = (logLevel === "info" && level === "info") ||
		(["info", "warning"].indexOf(logLevel) >= 0 && level === "warning") ||
		(["info", "warning", "error"].indexOf(logLevel) >= 0 && level === "error");
	return shouldLog;
}

function logGroup(logFn) {
	return function(level, msg) {
		if(shouldLog(level)) {
			logFn(msg);
		}
	};
}

module.exports = function(level, msg) {
	if(shouldLog(level)) {
		if(level === "info") {
			console.log(msg);
		} else if(level === "warning") {
			console.warn(msg);
		} else if(level === "error") {
			console.error(msg);
		}
	}
};

var group = console.group || dummy;
var groupCollapsed = console.groupCollapsed || dummy;
var groupEnd = console.groupEnd || dummy;

module.exports.group = logGroup(group);

module.exports.groupCollapsed = logGroup(groupCollapsed);

module.exports.groupEnd = logGroup(groupEnd);

module.exports.setLogLevel = function(level) {
	logLevel = level;
};


/***/ }),

/***/ "./node_modules/razzle/node_modules/webpack/hot/poll.js?300":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(__resourceQuery) {/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
/*globals __resourceQuery */
if(true) {
	var hotPollInterval = +(__resourceQuery.substr(1)) || (10 * 60 * 1000);
	var log = __webpack_require__("./node_modules/razzle/node_modules/webpack/hot/log.js");

	var checkForUpdate = function checkForUpdate(fromUpdate) {
		if(module.hot.status() === "idle") {
			module.hot.check(true).then(function(updatedModules) {
				if(!updatedModules) {
					if(fromUpdate) log("info", "[HMR] Update applied.");
					return;
				}
				__webpack_require__("./node_modules/razzle/node_modules/webpack/hot/log-apply-result.js")(updatedModules, updatedModules);
				checkForUpdate(true);
			}).catch(function(err) {
				var status = module.hot.status();
				if(["abort", "fail"].indexOf(status) >= 0) {
					log("warning", "[HMR] Cannot apply update.");
					log("warning", "[HMR] " + err.stack || err.message);
					log("warning", "[HMR] You need to restart the application!");
				} else {
					log("warning", "[HMR] Update failed: " + err.stack || err.message);
				}
			});
		}
	};
	setInterval(checkForUpdate, hotPollInterval);
} else {
	throw new Error("[HMR] Hot Module Replacement is disabled.");
}

/* WEBPACK VAR INJECTION */}.call(exports, "?300"))

/***/ }),

/***/ "./node_modules/react-select-plus/dist/react-select-plus.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(undefined);
// imports


// module
exports.push([module.i, "/**\n * React Select Plus\n * =================\n * MIT License: https://github.com/HubSpot/react-select-plus\n*/\n.Select {\n  position: relative;\n}\n.Select input::-webkit-contacts-auto-fill-button,\n.Select input::-webkit-credentials-auto-fill-button {\n  display: none !important;\n}\n.Select input::-ms-clear {\n  display: none !important;\n}\n.Select input::-ms-reveal {\n  display: none !important;\n}\n.Select,\n.Select div,\n.Select input,\n.Select span {\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n}\n.Select.is-disabled .Select-arrow-zone {\n  cursor: default;\n  pointer-events: none;\n  opacity: 0.35;\n}\n.Select.is-disabled > .Select-control {\n  background-color: #f9f9f9;\n}\n.Select.is-disabled > .Select-control:hover {\n  box-shadow: none;\n}\n.Select.is-open > .Select-control {\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n  background: #fff;\n  border-color: #b3b3b3 #ccc #d9d9d9;\n}\n.Select.is-open > .Select-control .Select-arrow {\n  top: -2px;\n  border-color: transparent transparent #999;\n  border-width: 0 5px 5px;\n}\n.Select.is-searchable.is-open > .Select-control {\n  cursor: text;\n}\n.Select.is-searchable.is-focused:not(.is-open) > .Select-control {\n  cursor: text;\n}\n.Select.is-focused > .Select-control {\n  background: #fff;\n}\n.Select.is-focused:not(.is-open) > .Select-control {\n  border-color: #007eff;\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 0 3px rgba(0, 126, 255, 0.1);\n  background: #fff;\n}\n.Select.has-value.is-clearable.Select--single > .Select-control .Select-value {\n  padding-right: 42px;\n}\n.Select.has-value.Select--single > .Select-control .Select-value .Select-value-label,\n.Select.has-value.is-pseudo-focused.Select--single > .Select-control .Select-value .Select-value-label {\n  color: #333;\n}\n.Select.has-value.Select--single > .Select-control .Select-value a.Select-value-label,\n.Select.has-value.is-pseudo-focused.Select--single > .Select-control .Select-value a.Select-value-label {\n  cursor: pointer;\n  text-decoration: none;\n}\n.Select.has-value.Select--single > .Select-control .Select-value a.Select-value-label:hover,\n.Select.has-value.is-pseudo-focused.Select--single > .Select-control .Select-value a.Select-value-label:hover,\n.Select.has-value.Select--single > .Select-control .Select-value a.Select-value-label:focus,\n.Select.has-value.is-pseudo-focused.Select--single > .Select-control .Select-value a.Select-value-label:focus {\n  color: #007eff;\n  outline: none;\n  text-decoration: underline;\n}\n.Select.has-value.Select--single > .Select-control .Select-value a.Select-value-label:focus,\n.Select.has-value.is-pseudo-focused.Select--single > .Select-control .Select-value a.Select-value-label:focus {\n  background: #fff;\n}\n.Select.has-value.is-pseudo-focused .Select-input {\n  opacity: 0;\n}\n.Select.is-open .Select-arrow,\n.Select .Select-arrow-zone:hover > .Select-arrow {\n  border-top-color: #666;\n}\n.Select.Select--rtl {\n  direction: rtl;\n  text-align: right;\n}\n.Select-control {\n  background-color: #fff;\n  border-color: #d9d9d9 #ccc #b3b3b3;\n  border-radius: 4px;\n  border: 1px solid #ccc;\n  color: #333;\n  cursor: default;\n  display: table;\n  border-spacing: 0;\n  border-collapse: separate;\n  height: 36px;\n  outline: none;\n  overflow: hidden;\n  position: relative;\n  width: 100%;\n}\n.Select-control:hover {\n  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.06);\n}\n.Select-control .Select-input:focus {\n  outline: none;\n  background: #fff;\n}\n.Select-placeholder,\n.Select--single > .Select-control .Select-value {\n  bottom: 0;\n  color: #aaa;\n  left: 0;\n  line-height: 34px;\n  padding-left: 10px;\n  padding-right: 10px;\n  position: absolute;\n  right: 0;\n  top: 0;\n  max-width: 100%;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.Select-input {\n  height: 34px;\n  padding-left: 10px;\n  padding-right: 10px;\n  vertical-align: middle;\n}\n.Select-input > input {\n  width: 100%;\n  background: none transparent;\n  border: 0 none;\n  box-shadow: none;\n  cursor: default;\n  display: inline-block;\n  font-family: inherit;\n  font-size: inherit;\n  margin: 0;\n  outline: none;\n  line-height: 17px;\n  /* For IE 8 compatibility */\n  padding: 8px 0 12px;\n  /* For IE 8 compatibility */\n  -webkit-appearance: none;\n}\n.is-focused .Select-input > input {\n  cursor: text;\n}\n.has-value.is-pseudo-focused .Select-input {\n  opacity: 0;\n}\n.Select-control:not(.is-searchable) > .Select-input {\n  outline: none;\n}\n.Select-loading-zone {\n  cursor: pointer;\n  display: table-cell;\n  position: relative;\n  text-align: center;\n  vertical-align: middle;\n  width: 16px;\n}\n.Select-loading {\n  -webkit-animation: Select-animation-spin 400ms infinite linear;\n  -o-animation: Select-animation-spin 400ms infinite linear;\n  animation: Select-animation-spin 400ms infinite linear;\n  width: 16px;\n  height: 16px;\n  box-sizing: border-box;\n  border-radius: 50%;\n  border: 2px solid #ccc;\n  border-right-color: #333;\n  display: inline-block;\n  position: relative;\n  vertical-align: middle;\n}\n.Select-clear-zone {\n  -webkit-animation: Select-animation-fadeIn 200ms;\n  -o-animation: Select-animation-fadeIn 200ms;\n  animation: Select-animation-fadeIn 200ms;\n  color: #999;\n  cursor: pointer;\n  display: table-cell;\n  position: relative;\n  text-align: center;\n  vertical-align: middle;\n  width: 17px;\n}\n.Select-clear-zone:hover {\n  color: #D0021B;\n}\n.Select-clear {\n  display: inline-block;\n  font-size: 18px;\n  line-height: 1;\n}\n.Select--multi .Select-clear-zone {\n  width: 17px;\n}\n.Select-arrow-zone {\n  cursor: pointer;\n  display: table-cell;\n  position: relative;\n  text-align: center;\n  vertical-align: middle;\n  width: 25px;\n  padding-right: 5px;\n}\n.Select--rtl .Select-arrow-zone {\n  padding-right: 0;\n  padding-left: 5px;\n}\n.Select-arrow {\n  border-color: #999 transparent transparent;\n  border-style: solid;\n  border-width: 5px 5px 2.5px;\n  display: inline-block;\n  height: 0;\n  width: 0;\n  position: relative;\n}\n.Select-control > *:last-child {\n  padding-right: 5px;\n}\n.Select--multi .Select-multi-value-wrapper {\n  display: inline-block;\n}\n.Select .Select-aria-only {\n  position: absolute;\n  display: inline-block;\n  height: 1px;\n  width: 1px;\n  margin: -1px;\n  clip: rect(0, 0, 0, 0);\n  overflow: hidden;\n  float: left;\n}\n@-webkit-keyframes Select-animation-fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes Select-animation-fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.Select-menu-outer {\n  border-bottom-right-radius: 4px;\n  border-bottom-left-radius: 4px;\n  background-color: #fff;\n  border: 1px solid #ccc;\n  border-top-color: #e6e6e6;\n  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.06);\n  box-sizing: border-box;\n  margin-top: -1px;\n  max-height: 200px;\n  position: absolute;\n  top: 100%;\n  width: 100%;\n  z-index: 1;\n  -webkit-overflow-scrolling: touch;\n}\n.Select-menu {\n  max-height: 198px;\n  overflow-y: auto;\n}\n.Select-option-group-label {\n  box-sizing: border-box;\n  background-color: #fff;\n  color: #666666;\n  font-weight: bold;\n  cursor: default;\n  display: block;\n  padding: 8px 10px;\n}\n.Select-option-group-label ~ .Select-option,\n.Select-option-group-label ~ .Select-option-group {\n  padding-left: 20px;\n}\n.Select-option {\n  box-sizing: border-box;\n  background-color: #fff;\n  color: #666666;\n  cursor: pointer;\n  display: block;\n  padding: 8px 10px;\n}\n.Select-option:last-child {\n  border-bottom-right-radius: 4px;\n  border-bottom-left-radius: 4px;\n}\n.Select-option.is-selected {\n  background-color: #f5faff;\n  /* Fallback color for IE 8 */\n  background-color: rgba(0, 126, 255, 0.04);\n  color: #333;\n}\n.Select-option.is-focused {\n  background-color: #ebf5ff;\n  /* Fallback color for IE 8 */\n  background-color: rgba(0, 126, 255, 0.08);\n  color: #333;\n}\n.Select-option.is-disabled {\n  color: #cccccc;\n  cursor: default;\n}\n.Select-noresults {\n  box-sizing: border-box;\n  color: #999999;\n  cursor: default;\n  display: block;\n  padding: 8px 10px;\n}\n.Select--multi .Select-input {\n  vertical-align: middle;\n  margin-left: 10px;\n  padding: 0;\n}\n.Select--multi.Select--rtl .Select-input {\n  margin-left: 0;\n  margin-right: 10px;\n}\n.Select--multi.has-value .Select-input {\n  margin-left: 5px;\n}\n.Select--multi .Select-value {\n  background-color: #ebf5ff;\n  /* Fallback color for IE 8 */\n  background-color: rgba(0, 126, 255, 0.08);\n  border-radius: 2px;\n  border: 1px solid #c2e0ff;\n  /* Fallback color for IE 8 */\n  border: 1px solid rgba(0, 126, 255, 0.24);\n  color: #007eff;\n  display: inline-block;\n  font-size: 0.9em;\n  line-height: 1.4;\n  margin-left: 5px;\n  margin-top: 5px;\n  vertical-align: top;\n}\n.Select--multi .Select-value-icon,\n.Select--multi .Select-value-label {\n  display: inline-block;\n  vertical-align: middle;\n}\n.Select--multi .Select-value-label {\n  border-bottom-right-radius: 2px;\n  border-top-right-radius: 2px;\n  cursor: default;\n  padding: 2px 5px;\n}\n.Select--multi a.Select-value-label {\n  color: #007eff;\n  cursor: pointer;\n  text-decoration: none;\n}\n.Select--multi a.Select-value-label:hover {\n  text-decoration: underline;\n}\n.Select--multi .Select-value-icon {\n  cursor: pointer;\n  border-bottom-left-radius: 2px;\n  border-top-left-radius: 2px;\n  border-right: 1px solid #c2e0ff;\n  /* Fallback color for IE 8 */\n  border-right: 1px solid rgba(0, 126, 255, 0.24);\n  padding: 1px 5px 3px;\n}\n.Select--multi .Select-value-icon:hover,\n.Select--multi .Select-value-icon:focus {\n  background-color: #d8eafd;\n  /* Fallback color for IE 8 */\n  background-color: rgba(0, 113, 230, 0.08);\n  color: #0071e6;\n}\n.Select--multi .Select-value-icon:active {\n  background-color: #c2e0ff;\n  /* Fallback color for IE 8 */\n  background-color: rgba(0, 126, 255, 0.24);\n}\n.Select--multi.Select--rtl .Select-value {\n  margin-left: 0;\n  margin-right: 5px;\n}\n.Select--multi.Select--rtl .Select-value-icon {\n  border-right: none;\n  border-left: 1px solid #c2e0ff;\n  /* Fallback color for IE 8 */\n  border-left: 1px solid rgba(0, 126, 255, 0.24);\n}\n.Select--multi.is-disabled .Select-value {\n  background-color: #fcfcfc;\n  border: 1px solid #e3e3e3;\n  color: #333;\n}\n.Select--multi.is-disabled .Select-value-icon {\n  cursor: not-allowed;\n  border-right: 1px solid #e3e3e3;\n}\n.Select--multi.is-disabled .Select-value-icon:hover,\n.Select--multi.is-disabled .Select-value-icon:focus,\n.Select--multi.is-disabled .Select-value-icon:active {\n  background-color: #fcfcfc;\n}\n@keyframes Select-animation-spin {\n  to {\n    transform: rotate(1turn);\n  }\n}\n@-webkit-keyframes Select-animation-spin {\n  to {\n    -webkit-transform: rotate(1turn);\n  }\n}\n", ""]);

// exports


/***/ }),

/***/ "./src/Assets/bg2.svg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/bg2.06dc0c29.svg";

/***/ }),

/***/ "./src/Assets/bg4.svg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/bg4.edbe02ce.svg";

/***/ }),

/***/ "./src/Assets/bg8.svg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/bg8.4e730845.svg";

/***/ }),

/***/ "./src/Assets/unizonn/uniz_.svg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/uniz_.a6f6b690.svg";

/***/ }),

/***/ "./src/Assets/unizonn/unizz_small.svg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/unizz_small.d3ec35e9.svg";

/***/ }),

/***/ "./src/Components/ArticleItem/index.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Avatar__ = __webpack_require__("./src/Components/Avatar/index.tsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router_dom__ = __webpack_require__("react-router-dom");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_router_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__LikeButton__ = __webpack_require__("./src/Components/LikeButton/index.tsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__PopoverLink__ = __webpack_require__("./src/Components/PopoverLink/index.tsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_timeago__ = __webpack_require__("react-timeago");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_timeago___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_timeago__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_Utils_helper__ = __webpack_require__("./src/Utils/helper.ts");







// tslint:disable-next-line:no-any
class ArticleItem extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
    componentDidMount() {
        // UIkit.notification('MyMessage', 'danger');
    }
    render() {
        const { article } = this.props;
        const { author } = article;
        const body = Object(__WEBPACK_IMPORTED_MODULE_6_Utils_helper__["b" /* strip_html_tags */])(article.body);
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-card uk-card-default raised uk-width-1-1", style: {
                marginBottom: this.props.small ? 7 : 15,
                backgroundColor: '#fff',
            } },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "" },
                this.props.small ? null : (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-padding-remove-bottom uk-padding-small" },
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-grid-small uk-flex", "uk-grid": true },
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-width-auto" },
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1__Avatar__["a" /* default */], { url: author.avatar ? author.avatar.url : 'https://getuikit.com/docs/images/avatar.jpg', size: 40, presence: false })),
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-width-auto" },
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4__PopoverLink__["a" /* default */], { link: article.id, user: author },
                                author.firstname,
                                " ",
                                author.lastname),
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("p", { className: "uk-text-meta uk-margin-remove-top" },
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("time", { dateTime: article.createdAt },
                                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_5_react_timeago___default.a, { className: "timeago", date: article.createdAt }),
                                    " \u0095",
                                    ' ',
                                    body.lengthInMinutes())))))),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "card-body uk-padding-remove-vertical simple-link", style: { paddingTop: this.props.small ? 0 : 6, borderBottom: 1 } },
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_react_router_dom__["Link"], { to: `/article/${article.id}`, className: "simple-link" },
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("h5", { className: "uk-text-medium uk-text-bold uk-text-break", style: { fontSize: this.props.small ? 17 : 23, fontFamily: 'Crimson Text' } }, this.props.small
                            ? article.title.truncString('...', 36)
                            : article.title.truncString('...', 140))),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("p", { style: { color: '#212121', fontFamily: 'Muli', fontSize: this.props.small ? 14 : 17 } }, this.props.small ? body.truncString('...', 70) : body.truncString('...', 140))),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "post-stats clearfix uk-padding-small" },
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-flex pull-left" },
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3__LikeButton__["a" /* default */], { liked: true, likeCount: 2 }),
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_react_router_dom__["Link"], { to: `/article/${article.id}#comments`, className: "response-count uk-flex uk-inline uk-margin-left uk-margin-right" },
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { "uk-icon": "icon: comment; ratio: 1.0" }),
                            " ",
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-visible@s" }, "Comments")),
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", { className: "response-count uk-flex uk-inline" },
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { "uk-icon": "icon: forward; ratio: 1.2" }),
                            " ",
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-visible@s" }, "Share"))),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-flex  response-count pull-right" },
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "dropdown" },
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("button", { className: "uk-button uk-button-text uk-margin-right", type: "button" },
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { "uk-icon": "icon: more; ratio: 1.0" })),
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { "data-uk-drop": "mode: click; pos: bottom-right" },
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("ul", { className: "menu" },
                                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("li", { className: "menu-item uk-padding-small" },
                                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", { href: "#", className: "uk-text-bold" },
                                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { "uk-icon": "icon: plus-circle; ratio: 1" }),
                                            " Activity")),
                                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("li", { className: "menu-item uk-padding-small" },
                                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", { href: "#", className: "uk-text-bold" },
                                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { "uk-icon": "icon: warning; ratio: 1" }),
                                            " Don't like this")),
                                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("li", { className: "menu-item uk-padding-small" },
                                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", { href: "#", className: "uk-text-bold" },
                                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { "uk-icon": "icon: info; ratio: 1" }),
                                            " Report"))))),
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("button", { className: "uk-button uk-button-text" },
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { "uk-icon": "icon: bookmark; ratio: 1.2" })))))));
    }
}
/* harmony default export */ __webpack_exports__["a"] = (ArticleItem);
/*

          <{this.props.small && (this.props.article.link === null) ? null : (
                <div className="image">
                  <div
                    data-uk-lightbox="animation: fade; video-autoplay: true;"
                    className="uk-inline-clip uk-transition-toggle"
                  >
                      <a
                        className="uk-inline"
                        href="https://s3.envato.com/files/233580557/02_sign_up_step_1.jpg"
                      >
                        <img
                          src="https://s3.envato.com/files/233580557/02_sign_up_step_1.jpg"
                          className="img-responsive uk-width-1-1 uk-transition-scale-up uk-transition-opaque"
                          alt="..."
                          style={{maxHeight: 280 }}
                        />
                      </a>
                  </div>
                </div>)
              }
*/


/***/ }),

/***/ "./src/Components/ArticleList/index.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_Components_ArticleItem__ = __webpack_require__("./src/Components/ArticleItem/index.tsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_apollo__ = __webpack_require__("react-apollo");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_apollo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_apollo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_infinite_scroller__ = __webpack_require__("react-infinite-scroller");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_infinite_scroller___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_infinite_scroller__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_Components_EmptyStates__ = __webpack_require__("./src/Components/EmptyStates/index.tsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_Graphql_Query__ = __webpack_require__("./src/Graphql/Query/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_content_loader__ = __webpack_require__("react-content-loader");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_content_loader___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react_content_loader__);







// const MyFacebookLoader = () => <Facebook />;
const MyLoader = () => (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_6_react_content_loader___default.a, { height: 200, width: 400, speed: 2, primaryColor: '#f3f3f3', secondaryColor: '#ecebeb' },
    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("rect", { x: "70", y: "15", rx: "4", ry: "4", width: "117", height: "6.4" }),
    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("rect", { x: "70", y: "35", rx: "3", ry: "3", width: "85", height: "6.4" }),
    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("rect", { x: "1", y: "136", rx: "3", ry: "3", width: "350", height: "6.4" }),
    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("rect", { x: "-1", y: "118", rx: "3", ry: "3", width: "380", height: "6.4" }),
    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("rect", { x: "0", y: "150", rx: "3", ry: "3", width: "201", height: "6.4" }),
    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("circle", { cx: "30", cy: "30", r: "30" }),
    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("rect", { x: "-0.5", y: "70.27", rx: "0", ry: "0", width: "348", height: "16" }),
    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("rect", { x: "1.5", y: "89.27", rx: "0", ry: "0", width: "217", height: "12" }),
    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("rect", { x: "2.5", y: "175", rx: "0", ry: "0", width: "61", height: "18" }),
    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("rect", { x: "72.5", y: "175", rx: "0", ry: "0", width: "55", height: "18" }),
    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("rect", { x: "136.5", y: "175.27", rx: "0", ry: "0", width: "56", height: "18" }),
    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("rect", { x: "358.5", y: "177.27", rx: "0", ry: "0", width: "25", height: "16" }),
    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("rect", { x: "325.5", y: "177.27", rx: "0", ry: "0", width: "23", height: "16" })));
const ArticleList = Object(__WEBPACK_IMPORTED_MODULE_2_react_apollo__["graphql"])(__WEBPACK_IMPORTED_MODULE_5_Graphql_Query__["e" /* ARTICLES */], {
    props: ({ data }) => (Object.assign({}, data)),
    options: {
        pollInterval: 1000
    }
});
/* harmony default export */ __webpack_exports__["a"] = (ArticleList(({ loading, articles, error }) => {
    // tslint:disable-next-line:jsx-wrap-multiline
    if (loading) {
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-width-1-1 uk-padding-small", style: { backgroundColor: '#fff' } },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](MyLoader, null),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-width-1-1", style: { height: 10 } }),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](MyLoader, null),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-width-1-1", style: { height: 10, margin: 20 } }),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](MyLoader, null),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-width-1-1", style: { height: 10 } }),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](MyLoader, null)));
    }
    if (error) {
        return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4_Components_EmptyStates__["a" /* ErrorComponent */], null);
    }
    return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3_react_infinite_scroller___default.a, { pageStart: 0, hasMore: true || false, loader: __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-padding-small", style: { backgroundColor: '#fff' } },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](MyLoader, null)) }, articles.map((article) => (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { key: article.id },
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_Components_ArticleItem__["a" /* default */], { article: article }))))));
}));


/***/ }),

/***/ "./src/Components/Avatar/index.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);

// tslint:disable-next-line:typedef
const Avatar = (props) => {
    return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("figure", null,
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("img", { className: `uk-border-${props.square ? 'square' : 'circle rcorners'}
                  uk-animation-kenburns uk-animation-fast`, src: props.url, width: props.size, height: props.size, alt: "img", 
            // tslint:disable-next-line:max-line-length
            style: { borderRadius: 60, borderImageWidth: 5, height: props.size + 1, width: props.size + 1, borderColor: '#454d5d',
                backgroundColor: 'azure' } }),
        props.presence ? __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("i", { className: "avatar-presence online" }) : null));
};
/* harmony default export */ __webpack_exports__["a"] = (Avatar);


/***/ }),

/***/ "./src/Components/CommentEditor/index.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_medium_draft_lib_index_css__ = __webpack_require__("./node_modules/medium-draft/lib/index.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_medium_draft_lib_index_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_medium_draft_lib_index_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__style_css__ = __webpack_require__("./src/Components/CommentEditor/style.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__style_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_medium_draft__ = __webpack_require__("medium-draft");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_medium_draft___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_medium_draft__);




class CommentEditor extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
    // tslint:disable-next-line:typedef
    constructor(props) {
        super(props);
        this.state = {
            editorState: Object(__WEBPACK_IMPORTED_MODULE_3_medium_draft__["createEditorState"])(),
        };
        this.onChange = (editorState) => {
            this.setState({ editorState });
        };
    }
    componentDidMount() {
        // this.refs.editor.focus();
    }
    render() {
        const { editorState } = this.state;
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-width-1-1" },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3_medium_draft__["Editor"], { ref: (ref) => this.editor = ref, editorState: editorState, onChange: this.onChange, placeholder: "Write you comment..." })));
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = CommentEditor;



/***/ }),

/***/ "./src/Components/CommentEditor/style.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(undefined);
// imports


// module
exports.push([module.i, ".md-RichEditor-root {\n  background: #fff;\n  box-sizing: border-box;\n  padding: 5px 5px;\n  position: relative;\n  line-height: 1.4em; }\n\n.md-RichEditor-editor {\n  cursor: text;\n  margin-top: 10px;\n  position: relative;\n  margin: 0 auto; }\n  .md-RichEditor-editor h3 {\n    font-size: 1.3em;\n    margin: 1.2em 0; }\n\n.md-RichEditor-editor .public-DraftEditorPlaceholder-root,\n.md-RichEditor-editor .public-DraftEditor-content {\n  margin: 0px -15px -15px;\n  padding: 15px; }\n\n.md-RichEditor-editor .public-DraftEditor-content {\n  min-height: 70px; }\n\n.md-RichEditor-hidePlaceholder .public-DraftEditorPlaceholder-root {\n  display: none; }\n\n.md-RichEditor-editor .md-RichEditor-blockquote {\n  border-left: 5px solid #4CA8DE;\n  color: #555;\n  font-size: 1.2em;\n  margin: 0;\n  padding: 10px 0 10px 20px;\n  background-color: #E2F2FF; }\n\n.md-RichEditor-blockquote a {\n  text-decoration: underline; }\n\n.public-DraftEditor-content .md-block:first-child {\n  margin-top: 0;\n  padding-top: 0; }\n\n.md-RichEditor-editor .public-DraftStyleDefault-pre {\n  background-color: rgba(0, 0, 0, 0.05);\n  font-size: 16px;\n  padding: 20px; }\n\n.public-DraftStyleDefault-unorderedListItem,\n.public-DraftStyleDefault-orderedListItem {\n  margin-bottom: 10px; }\n\n.md-editor-action {\n  position: fixed;\n  top: 5px;\n  left: 5px; }\n  .md-editor-action button {\n    display: block; }\n", ""]);

// exports


/***/ }),

/***/ "./src/Components/ConnectBox/index.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_apollo__ = __webpack_require__("react-apollo");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_apollo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_apollo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_infinite_scroller__ = __webpack_require__("react-infinite-scroller");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_infinite_scroller___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_infinite_scroller__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_Components_EmptyStates__ = __webpack_require__("./src/Components/EmptyStates/index.tsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_Graphql_Query__ = __webpack_require__("./src/Graphql/Query/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_Components_PersonItem__ = __webpack_require__("./src/Components/PersonItem/index.tsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_Components_Label__ = __webpack_require__("./src/Components/Label/index.tsx");







const ConnectBox = Object(__WEBPACK_IMPORTED_MODULE_1_react_apollo__["graphql"])(__WEBPACK_IMPORTED_MODULE_4_Graphql_Query__["e" /* ARTICLES */], {
    props: ({ data }) => (Object.assign({}, data)),
});
/* harmony default export */ __webpack_exports__["a"] = (ConnectBox(({ loading, articles, error, refetch }) => {
    if (loading) {
        return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3_Components_EmptyStates__["b" /* LoadingComponent */], null);
    }
    if (error) {
        return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3_Components_EmptyStates__["a" /* ErrorComponent */], { refresh: refetch });
    }
    return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-card person" },
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_6_Components_Label__["a" /* default */], { text: "Suggested Connection" }),
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_react_infinite_scroller___default.a, { pageStart: 0, hasMore: false }, articles.map((article, i) => (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { key: article.id, className: "box" },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_5_Components_PersonItem__["a" /* default */]
            // tslint:disable-next-line:max-line-length
            , { 
                // tslint:disable-next-line:max-line-length
                url: 
                // tslint:disable-next-line:max-line-length
                'data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4Ij4KPGNpcmNsZSBzdHlsZT0iZmlsbDojNzFFMkVGOyIgY3g9IjI1NiIgY3k9IjI1NiIgcj0iMjU2Ii8+CjxwYXRoIHN0eWxlPSJmaWxsOiMzOEM2RDk7IiBkPSJNMjI1LjcyNiw0MzkuNTQ2bDY5LjQ2OCw2OS40NjhDNDE3Ljk3NSw0OTAuMTUxLDUxMiwzODQuMDU3LDUxMiwyNTYgIGMwLTAuNjgxLTAuMDIxLTEuMzU4LTAuMDI2LTIuMDM4TDM1OC44NiwxMDAuODQ4TDIyNS43MjYsNDM5LjU0NnoiLz4KPHJlY3QgeD0iMjEzLjMzMyIgeT0iMjkyLjIxOSIgc3R5bGU9ImZpbGw6I0ZDRDA4ODsiIHdpZHRoPSI4NS4zMzMiIGhlaWdodD0iODUuMzMzIi8+CjxyZWN0IHg9IjI1Ni4yOTMiIHk9IjI5Mi4yMTkiIHN0eWxlPSJmaWxsOiNEREFCNjI7IiB3aWR0aD0iNDIuMzc5IiBoZWlnaHQ9Ijg1LjMzMyIvPgo8cGF0aCBzdHlsZT0iZmlsbDojRDlFREVDOyIgZD0iTTM1Ny43NjQsMzYwLjVsLTQ1LjIyLTkuMDQ0bC03Ljk5Mi0xMS42NjZjLTEuNDk2LTIuMTg0LTQuMzI3LTMuMDA3LTYuNzU5LTEuOTY1TDI1NiwzNTUuODMgIGwtNDEuNTQzLTE3Ljk4N2MtMi40MTUtMS4wNTMtNS4yMzktMC4yNjItNi43NTQsMS44OTNsLTguMjQ3LDExLjcxOWwtNDUuMjIsOS4wNDRjLTIzLjAyNCw0LjYwNi0zOS41OTYsMjQuODIxLTM5LjU5Niw0OC4zdjYwLjY0NyAgQzE1NS4xNDgsNDk2LjMyOCwyMDMuNzQsNTEyLDI1Niw1MTJzMTAwLjg1Mi0xNS42NzIsMTQxLjM2LTQyLjU1NXYtNjAuNjQ3QzM5Ny4zNiwzODUuMzE5LDM4MC43ODcsMzY1LjEwNCwzNTcuNzY0LDM2MC41eiIvPgo8cGF0aCBzdHlsZT0iZmlsbDojQzdEOEQ3OyIgZD0iTTM5Ny4zNiw0MDguNzk4YzAtMjMuNDgtMTYuNTc0LTQzLjY5Ni0zOS41OTYtNDguM2wtNDUuMjItOS4wNDRsLTcuOTkyLTExLjY2NiAgYy0xLjQ5Ni0yLjE4NC00LjMyNy0zLjAwNy02Ljc1OS0xLjk2NWwtNDEuNTAzLDE3Ljg4djE1Ni4yODljNTIuMTQ4LTAuMDU3LDEwMC42MzgtMTUuNzE3LDE0MS4wNzItNDIuNTQ5di02MC42NDVIMzk3LjM2eiIvPgo8cGF0aCBzdHlsZT0iZmlsbDojRkZFREI1OyIgZD0iTTM0Ny41MzEsMjA1LjQ0YzAuNDU5LTQuMjQ0LDAuNjk4LTguNDI4LDAuNjk4LTEyLjUwOWMwLTUzLjk3NC00MS4yOTMtOTcuNzI4LTkyLjIyOS05Ny43MjggIHMtOTIuMjI5LDQzLjc1My05Mi4yMjksOTcuNzI4YzAsNC4wOCwwLjI0LDguMjY0LDAuNjk4LDEyLjUwOWMtOC45NDUsMi4zMjYtMTMuMjAyLDE2LjA4Ny05LjUwNiwzMC44MTcgIGMzLjcwOCwxNC43NzYsMTQuMDE0LDI0LjkyMSwyMy4wMTgsMjIuNjYxYzAuODIxLTAuMjA1LDEuNTg2LTAuNTM4LDIuMzI2LTAuOTI3YzE2LjY2NywzMy40NTIsNDQuMzUxLDYwLjU5NCw3NS42OTMsNjAuNTk0ICBzNTkuMDI3LTI3LjEzOSw3NS42OTMtNjAuNTk0YzAuNzQsMC4zOSwxLjUwNSwwLjcyMiwyLjMyNiwwLjkyN2M5LjAwNCwyLjI2LDE5LjMwOS03Ljg4NSwyMy4wMTgtMjIuNjYxICBDMzYwLjczMiwyMjEuNTI3LDM1Ni40NzYsMjA3Ljc2MywzNDcuNTMxLDIwNS40NHoiLz4KPHBhdGggc3R5bGU9ImZpbGw6I0U4Q0Y4OTsiIGQ9Ik0zNDcuNTMxLDIwNS40NGMwLjQ1OS00LjI0NCwwLjY5OC04LjQyOCwwLjY5OC0xMi41MDljMC01My44NzItNDEuMTM4LTk3LjU1Ni05MS45NDEtOTcuNzIxdjIyMy4zNjUgIGMzMS4yMjMtMC4xNjcsNTguNzktMjcuMjM2LDc1LjQwNS02MC41ODVjMC43NCwwLjM5LDEuNTA1LDAuNzIyLDIuMzI2LDAuOTI3YzkuMDA0LDIuMjYsMTkuMzA5LTcuODg1LDIzLjAxOC0yMi42NjEgIEMzNjAuNzMyLDIyMS41MjcsMzU2LjQ3NiwyMDcuNzYzLDM0Ny41MzEsMjA1LjQ0eiIvPgo8cGF0aCBzdHlsZT0iZmlsbDojNDk0OTQ4OyIgZD0iTTIwNC4xNCwxNzAuNjY3YzAsMCw0MC4wODEsMzguMzU3LDEyMS45NjYsMjQuNTY2YzAsMCw3Ljk0LTEuOTk4LDIxLjQyNSwxMC4yMDcgIGMwLDAsMjQuNjkxLTUxLjU4MSwxMS4zMzEtMTA0LjU5MWMwLDAtNDMuNTI5LDUuNjAzLTYyLjkyMy02LjQ2NWMtMTkuMzk0LTEyLjA2Ny03MS4xMTEtMjQuOTk3LTgyLjc0NywxMS4yMDUgIGMwLDAtMzcuNDk1LTQuNzQxLTQ3LjgzOCwzNC4wNDdjLTEwLjM0MywzOC43ODgtMC44ODMsNjUuODAzLTAuODgzLDY1LjgwM1MxODMuODg0LDE1OC41OTksMjA0LjE0LDE3MC42Njd6Ii8+CjxnPgoJPHBhdGggc3R5bGU9ImZpbGw6IzMzMzMzMzsiIGQ9Ik0zNTguODYsMTAwLjg0OGMwLDAtNDMuNTI5LDUuNjAzLTYyLjkyMy02LjQ2NWMtOC44MDktNS40ODItMjQuMjg4LTExLjEyNC0zOS42NS0xMi4yNzZ2MTEyLjUwOSAgIGMxOC4zNTgsMy45MjcsNDEuNjA1LDUuMzY4LDY5LjgxOCwwLjYxNWMwLDAsNy45NC0xLjk5OCwyMS40MjUsMTAuMjA3QzM0Ny41MzEsMjA1LjQ0LDM3Mi4yMjEsMTUzLjg1OSwzNTguODYsMTAwLjg0OHoiLz4KCTxwYXRoIHN0eWxlPSJmaWxsOiMzMzMzMzM7IiBkPSJNMjY3LjkxLDUxMS42OTdjMzAuNDg0LTEuMzk4LDU5LjU2NC04LjEzNSw4Ni4zNTQtMTkuMjg3VjM1OS44bC0zNC45MDctNi45ODJMMjY3LjkxLDUxMS42OTd6Ii8+CjwvZz4KPGc+Cgk8cGF0aCBzdHlsZT0iZmlsbDojNDk0OTQ4OyIgZD0iTTI0NC4wOSw1MTEuNjk3Yy0zMC40ODQtMS4zOTgtNTkuNTY0LTguMTM1LTg2LjM1NC0xOS4yODdWMzU5LjhsMzQuOTA3LTYuOTgyTDI0NC4wOSw1MTEuNjk3eiIvPgoJPHBhdGggc3R5bGU9ImZpbGw6IzQ5NDk0ODsiIGQ9Ik0yOTAuMjQ1LDM1NS45MjRsLTI0LjA2MSw4LjgxNGMtMC4zOTgtMS4yNDUtMS41NTItMi4xNTEtMi45MjktMi4xNTFoLTEzLjY0OCAgIGMtMS4zNywwLTIuNTIsMC45LTIuOTI0LDIuMTM2bC0yNC4wMTctOC43OTljLTQuMTYtMS41MjQtOC41NjYsMS41NTUtOC41NjYsNS45ODV2MzAuMzk2YzAsNC40MjksNC40MDYsNy41MDksOC41NjYsNS45ODUgICBsMjQuMDE3LTguNzk5YzAuNDAzLDEuMjM2LDEuNTUyLDIuMTM2LDIuOTI0LDIuMTM2aDEzLjY0OGMxLjM3NywwLDIuNTI5LTAuOTA3LDIuOTI5LTIuMTUxbDI0LjA2MSw4LjgxNCAgIGM0LjE2LDEuNTI0LDguNTY2LTEuNTU1LDguNTY2LTUuOTg1VjM2MS45MUMyOTguODExLDM1Ny40NzksMjk0LjQwNSwzNTQuNDAxLDI5MC4yNDUsMzU1LjkyNHoiLz4KPC9nPgo8cGF0aCBzdHlsZT0iZmlsbDojMzMzMzMzOyIgZD0iTTI5MC4yNDUsMzU1LjkyNGwtMjQuMDYxLDguODE0Yy0wLjM5OC0xLjI0NS0xLjU1Mi0yLjE1MS0yLjkyOS0yLjE1MWgtNi45Njh2MjkuMDQxaDYuOTY4ICBjMS4zNzcsMCwyLjUyOS0wLjkwNywyLjkyOS0yLjE1MWwyNC4wNjEsOC44MTRjNC4xNiwxLjUyNCw4LjU2Ni0xLjU1NSw4LjU2Ni01Ljk4NVYzNjEuOTEgIEMyOTguODExLDM1Ny40NzksMjk0LjQwNSwzNTQuNDAxLDI5MC4yNDUsMzU1LjkyNHoiLz4KPGc+Cgk8Y2lyY2xlIHN0eWxlPSJmaWxsOiNBREFEQUQ7IiBjeD0iMjU2IiBjeT0iNDEwLjI5IiByPSI0LjMxIi8+Cgk8Y2lyY2xlIHN0eWxlPSJmaWxsOiNBREFEQUQ7IiBjeD0iMjU2IiBjeT0iNDMzLjEzMSIgcj0iNC4zMSIvPgoJPGNpcmNsZSBzdHlsZT0iZmlsbDojQURBREFEOyIgY3g9IjI1NiIgY3k9IjQ1NS45NzMiIHI9IjQuMzEiLz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K', name: `${article.author.firstname} ${article.author.lastname}` })))))));
}));


/***/ }),

/***/ "./src/Components/EmptyStates/index.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);

const ErrorComponent = (props) => (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-flex uk-flex-stretch uk-width-1-1" },
    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "empty uk-text-center uk-width-1-1" },
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("i", { className: "redo icon" }),
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("h5", { className: "empty-title h5" }, "There was an error"),
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("p", { className: "empty-subtitle" }, "Click to refresh."),
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "empty-action" },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("button", { className: "uk-button circle button uk-button-primary", onClick: () => props.refresh }, "Refresh")))));
/* harmony export (immutable) */ __webpack_exports__["a"] = ErrorComponent;

const EmptyComponent = (props) => (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "empty uk-flex-stretch uk-align-center uk-width-1-1" },
    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "empty-icon" },
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("i", { className: "icon icon-people" })),
    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("p", { className: "empty-title h5" }, "You have no new article"),
    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("p", { className: "empty-subtitle" }, "Click the button to find topics or people to connect to."),
    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "empty-action" },
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("button", { className: "btn btn-primary" }, "Connect"))));
/* unused harmony export EmptyComponent */

const LoadingComponent = (props) => (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: " uk-flex-stretch uk-text-center uk-width-1-1", style: { justifyContent: 'center', alignSelf: 'center' } },
    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "loader uk-margin-small" },
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "bullet" }),
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "bullet" }),
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "bullet" }),
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "bullet" }))));
/* harmony export (immutable) */ __webpack_exports__["b"] = LoadingComponent;



/***/ }),

/***/ "./src/Components/FollowButton/index.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);

const FollowButton = (props) => {
    const { small } = props;
    if (small) {
        if (props.liked) {
            return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", null,
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("button", { className: "btn btn-primary btn-sm", onClick: props.followClick, style: { padding: 0, margin: 0, width: 70 } }, "Connected")));
        }
        else {
            return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", null,
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("button", { className: "btn btn-default btn-sm uk-dark", onClick: props.followClick, style: { padding: 0, margin: 0, width: 70, color: '#000' } }, "+ Connect")));
        }
    }
    else {
        if (props.liked) {
            return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("button", { className: "ui attached button", onClick: props.followClick }, "Connected"));
        }
        else {
            return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("button", { className: "ui attached positive button", onClick: props.unFollowClick }, "+ Connect"));
        }
    }
};
/* harmony default export */ __webpack_exports__["a"] = (FollowButton);


/***/ }),

/***/ "./src/Components/InputBoxLogin/index.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom__ = __webpack_require__("react-router-dom");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_apollo__ = __webpack_require__("react-apollo");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_apollo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_apollo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_Graphql_Query__ = __webpack_require__("./src/Graphql/Query/index.ts");




// tslint:disable-next-line:no-any
class InputBoxLogin extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
    constructor() {
        super(...arguments);
        this.state = {
            text: '',
            loading: false,
        };
        this.checkUser = (e) => {
            e.preventDefault();
            this.setState({ loading: true });
            this.props.client
                .query({
                query: __WEBPACK_IMPORTED_MODULE_3_Graphql_Query__["j" /* USER_EXIST */],
                variables: {
                    email: this.state.text,
                },
            })
                .then(({ data }) => {
                data.userExist
                    ? this.props.history.push({
                        pathname: '/login',
                        email: this.state.text,
                    })
                    : this.props.history.push({
                        pathname: '/signup',
                        email: this.state.text,
                    });
                this.setState({ loading: false });
            })
                .catch((error) => {
                this.setState({ loading: false });
            });
        };
    }
    componentDidMount() {
        // ghg
    }
    render() {
        const { loading } = this.state;
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_0_react__["Fragment"], null,
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-hidden@s" },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("h1", { className: "uk-heading-primary uk-text-bold uk-text-uppercase", style: { fontSize: '15vw', color: '#fff' } }, "unizonn"),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("p", { className: " uk-margin uk-text-bold", style: { fontSize: '2.5vw', color: '#fff' } }, "Friendly and inclusive community for students and academia"),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "ui uk-flex-stretch" },
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("form", { onSubmit: this.checkUser, className: "uk-margin", "uk-margin": true },
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", null,
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "ui big input fluid" },
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("input", { type: "email", onChange: (e) => this.setState({ text: e.target.value }), value: this.state.text, required: true, placeholder: "Enter email to signin or signup" })),
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "ui big labeled" }, loading ? (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { "data-uk-spinner": "ratio: 1", className: "ui center middle", style: { marginLeft: 15, color: 'green' } })) : (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("button", { className: "ui label fluid big positive button", type: "submit", style: { marginTop: 5 } }, "GET STARTED"))))))),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-visible@s" },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("h1", { className: "uk-heading-primary uk-text-bold uk-text-uppercase", style: { fontSize: '8vw', color: '#fff' } }, "unizonn"),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("p", { className: " uk-margin uk-text-bold", style: { fontSize: '1.3vw', color: '#fff' } }, "Friendly and inclusive community for students and academia"),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "ui uk-flex-stretch" },
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("form", { onSubmit: this.checkUser, className: "uk-margin uk-flex-stretch", "uk-margin": true },
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "ui big right labeled input fluid" },
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("input", { type: "email", onChange: (e) => this.setState({ text: e.target.value }), value: this.state.text, required: true, placeholder: "Enter email to signin or signup" }),
                            loading ? (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { "data-uk-spinner": "ratio: 1", className: "ui center middle", style: { marginLeft: 15, color: 'green' } })) : (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("button", { className: "ui label positive button", type: "submit" }, "GET STARTED"))))))));
    }
}
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["withRouter"])(Object(__WEBPACK_IMPORTED_MODULE_2_react_apollo__["compose"])(__WEBPACK_IMPORTED_MODULE_2_react_apollo__["withApollo"], Object(__WEBPACK_IMPORTED_MODULE_2_react_apollo__["graphql"])(__WEBPACK_IMPORTED_MODULE_3_Graphql_Query__["j" /* USER_EXIST */], {
    name: 'userExist',
    options: { variables: { email: '' } },
}))(InputBoxLogin)));


/***/ }),

/***/ "./src/Components/InterestItem/index.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);

// tslint:disable-next-line:typedef
const InterestItem = (props) => {
    return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { key: props.key, className: "uk-tile uk-tile-secondary", style: { backgroundImage: props.url } },
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("button", { className: `uk-button ${props.checked ? 'uk-button-secondary uk-light' : 'uk-button-default uk-dark'} 
        uk-button-small uk-align-center`, onClick: () => props.onClickAdd(props.id) }, props.name)));
};
/* harmony default export */ __webpack_exports__["a"] = (InterestItem);


/***/ }),

/***/ "./src/Components/InterestItemSlim/index.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);

// tslint:disable-next-line:typedef
const InterestItemSlim = (props) => {
    return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", { className: "ui label ", style: { margin: 2 } },
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("img", { className: "ui right spaced avatar image", src: "https://semantic-ui.com/images/avatar/small/joe.jpg" }),
        props.name);
};
/* harmony default export */ __webpack_exports__["a"] = (InterestItemSlim);


/***/ }),

/***/ "./src/Components/Label/index.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style_css__ = __webpack_require__("./src/Components/Label/style.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__style_css__);


// tslint:disable-next-line:typedef
const Label = (props) => {
    return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "un-content uk-flex uk-flex-stretch" },
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "un-min-content un-block-display" }),
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("button", { className: "uk-button uk-button-text un-block-display", style: { display: 'flex', alignSelf: 'center', marginLeft: 15 } }, props.text)));
};
/* harmony default export */ __webpack_exports__["a"] = (Label);


/***/ }),

/***/ "./src/Components/Label/style.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(undefined);
// imports


// module
exports.push([module.i, ".un-content {\n  background-color: #ffffff;\n  height: 45px;\n  overflow: hidden;\n  margin-bottom: 10px; }\n\n.un-min-content {\n  background-color: #5ce925;\n  height: 45px;\n  width: 10px; }\n\n.un-block-display {\n  font-weight: bold; }\n", ""]);

// exports


/***/ }),

/***/ "./src/Components/Layouts/FooterPublic/index.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterPublic; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_glamorous__ = __webpack_require__("glamorous");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_glamorous___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_glamorous__);


// var winWidth = $(window).width();
// var winHeight = $(window).height();
/*const videoOpts = {
  height: winHeight,
  width: winWidth,
  playerVars: { // https://developers.google.com/youtube/player_parameters
    autoplay: 1
  }
};*/
const A = __WEBPACK_IMPORTED_MODULE_1_glamorous___default.a.a({
    color: '#fff',
});
const FooterPublic = () => {
    return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-flex uk-width-1-1 uk-flex-between uk-padding-small", style: { backgroundColor: '#21212199' } },
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-width-1-3@m uk-width-1-1@s", style: { color: '#fff', fontWeight: 'bold', fontSize: '1vw' } }, "Copyright @2017 Unizonn, All Rights Reserved"),
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-width-2-3@m uk-width-1-1@s uk-text-right" },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "ui horizontal list" },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](A, { className: "item simple-link", style: { color: '#fff', fontWeight: 'bold', fontSize: '1vw' } }, "Unizonn"),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](A, { className: "item simple-link", style: { color: '#fff', fontWeight: 'bold', fontSize: '1vw' } }, "Privacy"),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](A, { className: "item simple-link", style: { color: '#fff', fontWeight: 'bold', fontSize: '1vw' } }, "Terms & Condition"),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](A, { className: "item simple-link", style: { color: '#fff', fontWeight: 'bold', fontSize: '1vw' } }, "Careers"),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](A, { className: "item simple-link", style: { color: '#fff', fontWeight: 'bold', fontSize: '1vw' } }, "Skills"),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](A, { className: "item simple-link", style: { color: '#fff', fontWeight: 'bold', fontSize: '1vw' } }, "About Us"),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](A, { className: "item simple-link", style: { color: '#fff', fontWeight: 'bold', fontSize: '1vw' } }, "Contact"),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](A, { className: "item simple-link", style: { color: '#fff', fontWeight: 'bold', fontSize: '1vw' } }, "Support")))));
};

/*
<div className="uk-section uk-light" style={{ backgroundColor: '#333333' }}>
                <div className="uk-container" id="footerText">
                    <h3 style={{ marginBottom: 10 }}>Unizonn</h3>
                    <div className="uk-column-1-2@m uk-column-1-1@s">
                        <div>
                            <ul>
                                <li>
                                    <A href="#">Articles</A>
                                </li>
                                <li>
                                    <A href="#">Forum</A>
                                </li>
                                <li>
                                    <A href="#">Library</A>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <p>Join Unizonn now and reach out to new possibilies</p>
                        </div>
                        <div>
                            <button className="uk-button uk-button-primary">Get started</button>
                        </div>
                    </div>
                </div>
            </div>
            */ 


/***/ }),

/***/ "./src/Components/Layouts/Header/Private/index.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom__ = __webpack_require__("react-router-dom");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_Components_SearchContainer__ = __webpack_require__("./src/Components/SearchContainer/index.tsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__style_scss__ = __webpack_require__("./src/Components/Layouts/Header/Private/style.scss");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__style_scss__);

// import UIkit from 'uikit/src/js/uikit';



// tslint:disable-next-line:max-line-length
const maleP = 'data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4Ij4KPGNpcmNsZSBzdHlsZT0iZmlsbDojNzFFMkVGOyIgY3g9IjI1NiIgY3k9IjI1NiIgcj0iMjU2Ii8+CjxwYXRoIHN0eWxlPSJmaWxsOiMzOEM2RDk7IiBkPSJNMjI1LjcyNiw0MzkuNTQ2bDY5LjQ2OCw2OS40NjhDNDE3Ljk3NSw0OTAuMTUxLDUxMiwzODQuMDU3LDUxMiwyNTYgIGMwLTAuNjgxLTAuMDIxLTEuMzU4LTAuMDI2LTIuMDM4TDM1OC44NiwxMDAuODQ4TDIyNS43MjYsNDM5LjU0NnoiLz4KPHJlY3QgeD0iMjEzLjMzMyIgeT0iMjkyLjIxOSIgc3R5bGU9ImZpbGw6I0ZDRDA4ODsiIHdpZHRoPSI4NS4zMzMiIGhlaWdodD0iODUuMzMzIi8+CjxyZWN0IHg9IjI1Ni4yOTMiIHk9IjI5Mi4yMTkiIHN0eWxlPSJmaWxsOiNEREFCNjI7IiB3aWR0aD0iNDIuMzc5IiBoZWlnaHQ9Ijg1LjMzMyIvPgo8cGF0aCBzdHlsZT0iZmlsbDojRDlFREVDOyIgZD0iTTM1Ny43NjQsMzYwLjVsLTQ1LjIyLTkuMDQ0bC03Ljk5Mi0xMS42NjZjLTEuNDk2LTIuMTg0LTQuMzI3LTMuMDA3LTYuNzU5LTEuOTY1TDI1NiwzNTUuODMgIGwtNDEuNTQzLTE3Ljk4N2MtMi40MTUtMS4wNTMtNS4yMzktMC4yNjItNi43NTQsMS44OTNsLTguMjQ3LDExLjcxOWwtNDUuMjIsOS4wNDRjLTIzLjAyNCw0LjYwNi0zOS41OTYsMjQuODIxLTM5LjU5Niw0OC4zdjYwLjY0NyAgQzE1NS4xNDgsNDk2LjMyOCwyMDMuNzQsNTEyLDI1Niw1MTJzMTAwLjg1Mi0xNS42NzIsMTQxLjM2LTQyLjU1NXYtNjAuNjQ3QzM5Ny4zNiwzODUuMzE5LDM4MC43ODcsMzY1LjEwNCwzNTcuNzY0LDM2MC41eiIvPgo8cGF0aCBzdHlsZT0iZmlsbDojQzdEOEQ3OyIgZD0iTTM5Ny4zNiw0MDguNzk4YzAtMjMuNDgtMTYuNTc0LTQzLjY5Ni0zOS41OTYtNDguM2wtNDUuMjItOS4wNDRsLTcuOTkyLTExLjY2NiAgYy0xLjQ5Ni0yLjE4NC00LjMyNy0zLjAwNy02Ljc1OS0xLjk2NWwtNDEuNTAzLDE3Ljg4djE1Ni4yODljNTIuMTQ4LTAuMDU3LDEwMC42MzgtMTUuNzE3LDE0MS4wNzItNDIuNTQ5di02MC42NDVIMzk3LjM2eiIvPgo8cGF0aCBzdHlsZT0iZmlsbDojRkZFREI1OyIgZD0iTTM0Ny41MzEsMjA1LjQ0YzAuNDU5LTQuMjQ0LDAuNjk4LTguNDI4LDAuNjk4LTEyLjUwOWMwLTUzLjk3NC00MS4yOTMtOTcuNzI4LTkyLjIyOS05Ny43MjggIHMtOTIuMjI5LDQzLjc1My05Mi4yMjksOTcuNzI4YzAsNC4wOCwwLjI0LDguMjY0LDAuNjk4LDEyLjUwOWMtOC45NDUsMi4zMjYtMTMuMjAyLDE2LjA4Ny05LjUwNiwzMC44MTcgIGMzLjcwOCwxNC43NzYsMTQuMDE0LDI0LjkyMSwyMy4wMTgsMjIuNjYxYzAuODIxLTAuMjA1LDEuNTg2LTAuNTM4LDIuMzI2LTAuOTI3YzE2LjY2NywzMy40NTIsNDQuMzUxLDYwLjU5NCw3NS42OTMsNjAuNTk0ICBzNTkuMDI3LTI3LjEzOSw3NS42OTMtNjAuNTk0YzAuNzQsMC4zOSwxLjUwNSwwLjcyMiwyLjMyNiwwLjkyN2M5LjAwNCwyLjI2LDE5LjMwOS03Ljg4NSwyMy4wMTgtMjIuNjYxICBDMzYwLjczMiwyMjEuNTI3LDM1Ni40NzYsMjA3Ljc2MywzNDcuNTMxLDIwNS40NHoiLz4KPHBhdGggc3R5bGU9ImZpbGw6I0U4Q0Y4OTsiIGQ9Ik0zNDcuNTMxLDIwNS40NGMwLjQ1OS00LjI0NCwwLjY5OC04LjQyOCwwLjY5OC0xMi41MDljMC01My44NzItNDEuMTM4LTk3LjU1Ni05MS45NDEtOTcuNzIxdjIyMy4zNjUgIGMzMS4yMjMtMC4xNjcsNTguNzktMjcuMjM2LDc1LjQwNS02MC41ODVjMC43NCwwLjM5LDEuNTA1LDAuNzIyLDIuMzI2LDAuOTI3YzkuMDA0LDIuMjYsMTkuMzA5LTcuODg1LDIzLjAxOC0yMi42NjEgIEMzNjAuNzMyLDIyMS41MjcsMzU2LjQ3NiwyMDcuNzYzLDM0Ny41MzEsMjA1LjQ0eiIvPgo8cGF0aCBzdHlsZT0iZmlsbDojNDk0OTQ4OyIgZD0iTTIwNC4xNCwxNzAuNjY3YzAsMCw0MC4wODEsMzguMzU3LDEyMS45NjYsMjQuNTY2YzAsMCw3Ljk0LTEuOTk4LDIxLjQyNSwxMC4yMDcgIGMwLDAsMjQuNjkxLTUxLjU4MSwxMS4zMzEtMTA0LjU5MWMwLDAtNDMuNTI5LDUuNjAzLTYyLjkyMy02LjQ2NWMtMTkuMzk0LTEyLjA2Ny03MS4xMTEtMjQuOTk3LTgyLjc0NywxMS4yMDUgIGMwLDAtMzcuNDk1LTQuNzQxLTQ3LjgzOCwzNC4wNDdjLTEwLjM0MywzOC43ODgtMC44ODMsNjUuODAzLTAuODgzLDY1LjgwM1MxODMuODg0LDE1OC41OTksMjA0LjE0LDE3MC42Njd6Ii8+CjxnPgoJPHBhdGggc3R5bGU9ImZpbGw6IzMzMzMzMzsiIGQ9Ik0zNTguODYsMTAwLjg0OGMwLDAtNDMuNTI5LDUuNjAzLTYyLjkyMy02LjQ2NWMtOC44MDktNS40ODItMjQuMjg4LTExLjEyNC0zOS42NS0xMi4yNzZ2MTEyLjUwOSAgIGMxOC4zNTgsMy45MjcsNDEuNjA1LDUuMzY4LDY5LjgxOCwwLjYxNWMwLDAsNy45NC0xLjk5OCwyMS40MjUsMTAuMjA3QzM0Ny41MzEsMjA1LjQ0LDM3Mi4yMjEsMTUzLjg1OSwzNTguODYsMTAwLjg0OHoiLz4KCTxwYXRoIHN0eWxlPSJmaWxsOiMzMzMzMzM7IiBkPSJNMjY3LjkxLDUxMS42OTdjMzAuNDg0LTEuMzk4LDU5LjU2NC04LjEzNSw4Ni4zNTQtMTkuMjg3VjM1OS44bC0zNC45MDctNi45ODJMMjY3LjkxLDUxMS42OTd6Ii8+CjwvZz4KPGc+Cgk8cGF0aCBzdHlsZT0iZmlsbDojNDk0OTQ4OyIgZD0iTTI0NC4wOSw1MTEuNjk3Yy0zMC40ODQtMS4zOTgtNTkuNTY0LTguMTM1LTg2LjM1NC0xOS4yODdWMzU5LjhsMzQuOTA3LTYuOTgyTDI0NC4wOSw1MTEuNjk3eiIvPgoJPHBhdGggc3R5bGU9ImZpbGw6IzQ5NDk0ODsiIGQ9Ik0yOTAuMjQ1LDM1NS45MjRsLTI0LjA2MSw4LjgxNGMtMC4zOTgtMS4yNDUtMS41NTItMi4xNTEtMi45MjktMi4xNTFoLTEzLjY0OCAgIGMtMS4zNywwLTIuNTIsMC45LTIuOTI0LDIuMTM2bC0yNC4wMTctOC43OTljLTQuMTYtMS41MjQtOC41NjYsMS41NTUtOC41NjYsNS45ODV2MzAuMzk2YzAsNC40MjksNC40MDYsNy41MDksOC41NjYsNS45ODUgICBsMjQuMDE3LTguNzk5YzAuNDAzLDEuMjM2LDEuNTUyLDIuMTM2LDIuOTI0LDIuMTM2aDEzLjY0OGMxLjM3NywwLDIuNTI5LTAuOTA3LDIuOTI5LTIuMTUxbDI0LjA2MSw4LjgxNCAgIGM0LjE2LDEuNTI0LDguNTY2LTEuNTU1LDguNTY2LTUuOTg1VjM2MS45MUMyOTguODExLDM1Ny40NzksMjk0LjQwNSwzNTQuNDAxLDI5MC4yNDUsMzU1LjkyNHoiLz4KPC9nPgo8cGF0aCBzdHlsZT0iZmlsbDojMzMzMzMzOyIgZD0iTTI5MC4yNDUsMzU1LjkyNGwtMjQuMDYxLDguODE0Yy0wLjM5OC0xLjI0NS0xLjU1Mi0yLjE1MS0yLjkyOS0yLjE1MWgtNi45Njh2MjkuMDQxaDYuOTY4ICBjMS4zNzcsMCwyLjUyOS0wLjkwNywyLjkyOS0yLjE1MWwyNC4wNjEsOC44MTRjNC4xNiwxLjUyNCw4LjU2Ni0xLjU1NSw4LjU2Ni01Ljk4NVYzNjEuOTEgIEMyOTguODExLDM1Ny40NzksMjk0LjQwNSwzNTQuNDAxLDI5MC4yNDUsMzU1LjkyNHoiLz4KPGc+Cgk8Y2lyY2xlIHN0eWxlPSJmaWxsOiNBREFEQUQ7IiBjeD0iMjU2IiBjeT0iNDEwLjI5IiByPSI0LjMxIi8+Cgk8Y2lyY2xlIHN0eWxlPSJmaWxsOiNBREFEQUQ7IiBjeD0iMjU2IiBjeT0iNDMzLjEzMSIgcj0iNC4zMSIvPgoJPGNpcmNsZSBzdHlsZT0iZmlsbDojQURBREFEOyIgY3g9IjI1NiIgY3k9IjQ1NS45NzMiIHI9IjQuMzEiLz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K';
const PrivateHeader = (props) => {
    return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { "data-uk-sticky": "sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky mdc-toolbar mdc-toolbar--fixed", style: { marginBottom: 0 } },
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("nav", { className: "uk-navbar-container mdc-elevation--z2 uk-margin uk-background-secondary raised mdc-toolbar mdc-toolbar--fixed uk-dark", "uk-navbar": true, style: { marginBottom: 0 } },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "nav-overlay uk-navbar-left" },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("button", { className: "uk-navbar-toggle nav-overlay uk-hidden@m", type: "button", "uk-navbar-toggle-icon": true, "uk-toggle": "target: #offcanvas-nav", "uk-icon": "icon: menu; ratio: 1.5" }),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["Link"], { to: "/", className: "uk-navbar-item uk-logo uk-visible@m", href: "#" },
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("img", { src: __webpack_require__("./src/Assets/unizonn/uniz_.svg"), style: { height: 40 }, "uk-svg": true })),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["Link"], { to: "/", className: "uk-navbar-item uk-logo uk-hidden@m", href: "#" },
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("img", { src: __webpack_require__("./src/Assets/unizonn/unizz_small.svg"), style: { height: 40 }, "uk-svg": true })),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-width-1-4" },
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_Components_SearchContainer__["a" /* default */], null)),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "nav-overlay uk-navbar-right uk-visible@s" },
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("ul", { className: "uk-navbar-nav uk-visible@m" },
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("li", null,
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["Link"], { to: "/home", className: "uk-light bolder ui vertical" },
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-text-center" },
                                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("i", { "uk-icon": "icon: home" }),
                                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("p", { style: { padding: 0, margin: 0, fontSize: 11 } }, "Articles")))),
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("li", null,
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["Link"], { to: "/forum", className: "uk-light bolder" },
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-text-center" },
                                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("i", { "uk-icon": "icon: comment", className: "float center" }),
                                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("p", { style: { padding: 0, margin: 0, fontSize: 11 } }, "Lounge")))),
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("li", null,
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["Link"], { to: "/library", className: "uk-light bolder" },
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-text-center" },
                                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("i", { "uk-icon": "icon: location", className: "float center" }),
                                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("p", { style: { padding: 0, margin: 0, fontSize: 11 } }, "Library")))),
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("li", null,
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["Link"], { to: "/connections", className: "uk-light bolder" },
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-text-center" },
                                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("i", { "uk-icon": "icon: users", className: "float center" }),
                                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("p", { style: { padding: 0, margin: 0, fontSize: 11 } }, "Connects")))),
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("li", null,
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["Link"], { to: "/calendar", className: "uk-light bolder" },
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-text-center" },
                                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("i", { "uk-icon": "icon: calendar", className: "float center" }),
                                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("p", { style: { padding: 0, margin: 0, fontSize: 11 } }, "Calendar")))),
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("li", null,
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["Link"], { to: "/calendar", className: "uk-light bolder" },
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-text-center" },
                                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("i", { "uk-icon": "icon: user", className: "float center" }),
                                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("p", { style: { padding: 0, margin: 0, fontSize: 11 } }, "Request"))))),
                    props.isAuthenticated ? __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_0_react__["Fragment"], null,
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("ul", { className: "uk-iconnav" },
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("li", { className: "uk-animation-toggle" },
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("button", { className: "uk-animation-shake badge", "uk-icon": "icon: bell; ratio: 1", "data-badge": "8" }))),
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("ul", { className: "uk-navbar-nav" },
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("li", null,
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", { href: "#" },
                                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-animation-toggle" },
                                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("img", { className: "uk-border-circle round-avatar uk-animation-kenburns uk-border-small uk-animation-fast", src: props.me.avatar ? `https://gs3.blob.core.windows.net/unizonn/${props.me.avatar.name}` : maleP, width: "40", height: "40", alt: "img" }))),
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { "data-uk-dropdown": "mode: hover", style: { padding: 0 } },
                                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "popover-container" },
                                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "card mdc-menu__items mdc-list uk-dropdown-nav", style: { padding: 0 } },
                                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "card-header", style: { padding: 0, height: 70 } },
                                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("li", { className: "mdc-list-item", style: { height: 70 }, role: "menuitem" },
                                                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["Link"], { to: `/${props.me.username}`, className: "uk-text-bold simple-link-light" },
                                                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { className: "uk-text-bold" },
                                                            props.me.firstname,
                                                            " ",
                                                            props.me.lastname),
                                                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("br", null),
                                                        "@",
                                                        props.me.username))),
                                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "card-body", style: { padding: 0 } },
                                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("li", { className: "mdc-list-item ", role: "menuitem" },
                                                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["Link"], { to: "/favourites", className: "uk-text-bold simple-link-light" },
                                                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { "uk-icon": "icon: plus-circle; ratio: 1" }),
                                                        " Favourites")),
                                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("li", { className: "mdc-list-item", role: "menuitem" },
                                                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["Link"], { to: "/score", className: "uk-text-bold simple-link-light" },
                                                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { "uk-icon": "icon: plus-circle; ratio: 1" }),
                                                        " Reading Score")),
                                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("li", { className: "mdc-list-item ", role: "menuitem" },
                                                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["Link"], { to: "/favourites", className: "uk-text-bold simple-link-light" },
                                                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { "uk-icon": "icon: plus-circle; ratio: 1" }),
                                                        " Drafts")),
                                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("li", { className: "mdc-list-item ", role: "menuitem" },
                                                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["Link"], { to: "/favourites", className: "uk-text-bold simple-link-light" },
                                                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { "uk-icon": "icon: plus-circle; ratio: 1" }),
                                                        " Published")),
                                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("li", { className: "mdc-list-item ", role: "menuitem" },
                                                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["Link"], { to: "/favourites", className: "uk-text-bold simple-link-light" },
                                                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { "uk-icon": "icon: cog; ratio: 1" }),
                                                        " Settings"))),
                                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "card-footer", style: { padding: 0 } },
                                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("li", { className: "mdc-list-item", role: "menuitem" },
                                                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["Link"], { to: "/legal/privacy", className: "uk-text-bold simple-link-light" }, "Privacy")),
                                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("li", { className: "mdc-list-item", role: "menuitem" },
                                                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["Link"], { to: "/support", className: "uk-text-bold simple-link-light" }, "Support")),
                                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("li", { className: "mdc-list-item uk-text-bold", role: "menuitem", onClick: props.logout }, "Logout"))))))),
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-navbar-nav uk-padding-small" },
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["Link"], { to: "/write", className: "uk-button uk-button-primary uk-button-small" }, "Write")),
                        " ") :
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-navbar-nav uk-padding-small" },
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["Link"], { to: "/login", className: "uk-button uk-button-default uk-dark uk-button-small" }, "Get started"))),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "nav-overlay uk-navbar-right uk-hidden@s" }, props.isAuthenticated ? __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_0_react__["Fragment"], null,
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("ul", { className: "uk-iconnav" },
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("li", { className: "uk-animation-toggle" },
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["Link"], { className: "uk-animation-shake", to: "/message", "uk-icon": "icon: bell; ratio: 1.5" })),
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { "data-uk-drop": "mode: click", className: "uk-width-large uk-width-1-1@s" },
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-card uk-card-body uk-card-default" },
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("li", { className: "unread-notification" },
                                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", null,
                                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", null),
                                        "fgfggfg",
                                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "notification-metadata" },
                                            "ghghghh",
                                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("br", null),
                                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("small", null, '20/2/2018'))))))),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("ul", { className: "uk-navbar-nav" },
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("li", null,
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", { href: "#" },
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-animation-toggle" },
                                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("img", { className: "uk-border-circle round-avatar uk-animation-kenburns uk-border-small uk-animation-fast", src: props.me.avatar ? `https://gs3.blob.core.windows.net/unizonn/${props.me.avatar.name}` : maleP, width: "40", height: "40", alt: "img" }))),
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { "data-uk-dropdown": "mode: hover", style: { padding: 0 } },
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "popover-container" },
                                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "card mdc-menu__items mdc-list uk-dropdown-nav", style: { padding: 0 } },
                                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "card-header" }, "..."),
                                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "card-body", style: { padding: 0 } },
                                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("li", { className: "mdc-list-item", role: "menuitem" },
                                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["Link"], { to: "/profile", className: "uk-text-bold" },
                                                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { "uk-icon": "icon: plus-circle; ratio: 1" }),
                                                    " Profile")),
                                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("li", { className: "mdc-list-item", role: "menuitem" },
                                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["Link"], { to: "/favourites", className: "uk-text-bold" },
                                                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { "uk-icon": "icon: plus-circle; ratio: 1" }),
                                                    " Favourites")),
                                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("li", { className: "mdc-list-item", role: "menuitem" },
                                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["Link"], { to: "/score", className: "uk-text-bold" },
                                                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { "uk-icon": "icon: plus-circle; ratio: 1" }),
                                                    " Reading Score"))),
                                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "card-footer", style: { padding: 0 } },
                                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("li", { className: "mdc-list-item", role: "menuitem" },
                                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["Link"], { to: "/legal/privacy", className: "uk-text-bold" }, "Privacy")),
                                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("li", { className: "mdc-list-item", role: "menuitem" },
                                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["Link"], { to: "/support", className: "uk-text-bold" }, "Support")),
                                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("li", { className: "mdc-list-item uk-text-bold", role: "menuitem", onClick: props.logout }, "Logout"))))))),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-navbar-nav uk-padding-small" },
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["Link"], { to: "/write", className: "circle button primary icon" }, "+")))
                    :
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-navbar-nav uk-padding-small" },
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["Link"], { to: "/login", className: "uk-button uk-button-primary uk-dark uk-button-small" }, "Login")))))));
};
/* harmony default export */ __webpack_exports__["a"] = (PrivateHeader);


/***/ }),

/***/ "./src/Components/Layouts/Header/Private/style.scss":
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/Components/Layouts/Header/Public/index.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom__ = __webpack_require__("react-router-dom");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__style_scss__ = __webpack_require__("./src/Components/Layouts/Header/Public/style.scss");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__style_scss__);

// import UIkit from 'uikit/src/js/uikit';


// tslint:disable-next-line:max-line-length
const PublicHeader = (props) => {
    return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { "data-uk-sticky": "sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky mdc-toolbar mdc-toolbar--fixed", style: { marginBottom: 0 } },
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("nav", { className: "uk-navbar-container uk-margin uk-background-secondary raised mdc-toolbar mdc-toolbar--fixed uk-dark", "uk-navbar": true, style: { marginBottom: 0 } },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "nav-overlay uk-navbar-left" },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("button", { className: "uk-navbar-toggle nav-overlay uk-hidden@m", type: "button", "uk-navbar-toggle-icon": true, "uk-toggle": "target: #offcanvas-nav", "uk-icon": "icon: menu; ratio: 1.5" }),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["Link"], { to: "/", className: "uk-navbar-item uk-logo uk-visible@m", href: "#" },
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("img", { src: __webpack_require__("./src/Assets/unizonn/uniz_.svg"), style: { height: 40 }, "uk-svg": true })),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["Link"], { to: "/", className: "uk-navbar-item uk-logo uk-hidden@m", href: "#" },
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("img", { src: __webpack_require__("./src/Assets/unizonn/unizz_small.svg"), style: { height: 40 }, "uk-svg": true })),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "nav-overlay uk-navbar-right uk-visible@s" },
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-navbar-nav uk-padding-small" },
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["Link"], { to: "/login", className: "uk-button uk-button-primary uk-dark uk-button-small" }, "Get started"))),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "nav-overlay uk-navbar-right uk-hidden@s" },
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-navbar-nav uk-padding-small" },
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["Link"], { to: "/login", className: "uk-button uk-button-primary uk-dark uk-button-small" }, "Login")))))));
};
/* harmony default export */ __webpack_exports__["a"] = (PublicHeader);


/***/ }),

/***/ "./src/Components/Layouts/Header/Public/style.scss":
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/Components/Layouts/Header/index.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_Components_Layouts_Header_Public__ = __webpack_require__("./src/Components/Layouts/Header/Public/index.tsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_Components_Layouts_Header_Private__ = __webpack_require__("./src/Components/Layouts/Header/Private/index.tsx");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0_Components_Layouts_Header_Public__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1_Components_Layouts_Header_Private__["a"]; });





/***/ }),

/***/ "./src/Components/Layouts/MainLayout/ConnectLayout/index.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom__ = __webpack_require__("react-router-dom");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_Components_LeftSideBar__ = __webpack_require__("./src/Components/LeftSideBar/index.tsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_glamorous__ = __webpack_require__("glamorous");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_glamorous___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_glamorous__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_Components_Layouts_Header__ = __webpack_require__("./src/Components/Layouts/Header/index.tsx");
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};





const A = __WEBPACK_IMPORTED_MODULE_3_glamorous___default.a.a({
    fontFamily: 'brandon-grotesque',
    color: '#000000',
});
const ConnectLayout = (props) => {
    const { component: Component, isAuthenticated } = props, rest = __rest(props, ["component", "isAuthenticated"]);
    return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["Route"], Object.assign({}, rest, { exact: true, render: (matctProps) => isAuthenticated ? (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "" },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4_Components_Layouts_Header__["a" /* PrivateHeader */], { me: props.me, isAuthenticated: isAuthenticated, logout: props.logout }),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "columns uk-flex uk-flex-between uk-padding-large@s", style: { paddingTop: 30 } },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "column col-3 uk-margin-left uk-visible@m" },
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_Components_LeftSideBar__["a" /* default */], { user: props.me })),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "column col-10 uk-margin-small@s uk-width-expand" },
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](Component, Object.assign({}, matctProps)))))) : (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["Redirect"], { to: { pathname: '/' } })) })));
};
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["withRouter"])(ConnectLayout));


/***/ }),

/***/ "./src/Components/Layouts/MainLayout/Normal/index.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom__ = __webpack_require__("react-router-dom");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__style_css__ = __webpack_require__("./src/Components/Layouts/MainLayout/Normal/style.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__style_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_Components_Layouts_Header__ = __webpack_require__("./src/Components/Layouts/Header/index.tsx");
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};


// import { FooterPublic } from 'Components/Layouts/FooterPublic';


const EmptyLayout = (props) => {
    const { component: Component, isAuthenticated, exact } = props, rest = __rest(props, ["component", "isAuthenticated", "exact"]);
    return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["Route"], Object.assign({}, rest, { exact: exact, render: (matctProps) => isAuthenticated ? (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-width-1-1 uk-height-1-1 " },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3_Components_Layouts_Header__["a" /* PrivateHeader */], { me: props.me, isAuthenticated: isAuthenticated, logout: props.logout }),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-width-1-1 uk-flex  uk-height-1-1 " },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](Component, Object.assign({}, matctProps))))) : (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["Redirect"], { to: { pathname: '/' } })) })));
};
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["withRouter"])(EmptyLayout));


/***/ }),

/***/ "./src/Components/Layouts/MainLayout/Normal/style.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(undefined);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),

/***/ "./src/Components/Layouts/MainLayout/Private/index.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom__ = __webpack_require__("react-router-dom");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__style_css__ = __webpack_require__("./src/Components/Layouts/MainLayout/Private/style.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__style_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_Components_RightSideBar__ = __webpack_require__("./src/Components/RightSideBar/index.tsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_Components_LeftSideBar__ = __webpack_require__("./src/Components/LeftSideBar/index.tsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_glamorous__ = __webpack_require__("glamorous");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_glamorous___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_glamorous__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_Components_Layouts_Header__ = __webpack_require__("./src/Components/Layouts/Header/index.tsx");
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};







const A = __WEBPACK_IMPORTED_MODULE_5_glamorous___default.a.a({
    fontFamily: 'brandon-grotesque',
    color: '#000000',
});
const PrivateLayout = (props) => {
    const { component: Component, isAuthenticated } = props, rest = __rest(props, ["component", "isAuthenticated"]);
    return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["Route"], Object.assign({}, rest, { exact: true, render: (matctProps) => isAuthenticated ? (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "" },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_6_Components_Layouts_Header__["a" /* PrivateHeader */], { me: props.me, isAuthenticated: isAuthenticated, logout: props.logout }),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-flex uk-flex-center uk-flex-around uk-width-1-1", style: { paddingTop: 30 } },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-width-1-5 uk-margin-large-left uk-margin-small-right uk-visible@m" },
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4_Components_LeftSideBar__["a" /* default */], { user: props.me })),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-margin-small@s uk-width-expand" },
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](Component, Object.assign({}, matctProps))),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-width-1-5 uk-margin-large-right uk-margin-small-left uk-visible@m" },
                    !isAuthenticated ? (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-card uk-card-default uk-card-body uk-width-1-1 uk-padding-small", style: { marginBottom: 10 } },
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("h3", { className: "uk-card-title" }, "Hello"),
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("p", null, "Please signup or login to get the Unizonn experience. It will only take a few steps"),
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["Link"], { to: "/login", className: "uk-button uk-button-primary" }, "Login"))) : null,
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3_Components_RightSideBar__["a" /* default */], null))))) : (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["Redirect"], { to: { pathname: '/' } })) })));
};
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["withRouter"])(PrivateLayout));


/***/ }),

/***/ "./src/Components/Layouts/MainLayout/Private/style.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(undefined);
// imports


// module
exports.push([module.i, ".listItem {\n  list-style: inline-block;\n  list-style-type: none;\n  display: inline;\n  text-align: left; }\n\n.listItem li {\n  display: inline-block;\n  margin-right: 5px;\n  align-self: flex-start;\n  border-radius: 10px;\n  -webkit-border-radius: 10px; }\n", ""]);

// exports


/***/ }),

/***/ "./src/Components/Layouts/MainLayout/Profile/index.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom__ = __webpack_require__("react-router-dom");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_Components_ProfileLeft__ = __webpack_require__("./src/Components/ProfileLeft/index.tsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__style_css__ = __webpack_require__("./src/Components/Layouts/MainLayout/Profile/style.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__style_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4____ = __webpack_require__("./src/Components/Layouts/MainLayout/index.tsx");
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};





const ProfileLayout = (props) => {
    const { component: Component, isAuthenticated, exact, refreshToken } = props, rest = __rest(props, ["component", "isAuthenticated", "exact", "refreshToken"]);
    return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4____["b" /* EmptyLayout */], Object.assign({}, rest, { isAuthenticated: isAuthenticated, exact: exact !== null ? exact : true, component: (matchProps) => isAuthenticated ? (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-width-1-1" },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-cover-container uk-height-medium uk-card uk-card-default uk-background-primary" },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("canvas", { width: "", height: "" }),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("img", { src: "https://getuikit.com/docs/images/photo.jpg", alt: "cover image", "uk-cover": "ratio: 1", className: "uk-blend-hard-darken" })),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-card uk-card-default uk-padding-small" },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-text-right" },
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { "uk-switcher": "animation: uk-animation-fade" },
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("button", { className: "uk-button uk-button-text uk-margin-right", type: "button" }, "Post"),
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("button", { className: "uk-button uk-button-text uk-margin-right", type: "button" }, "Connections"),
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("button", { className: "uk-button uk-button-text uk-margin-right", type: "button" }, "Activity"),
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("button", { className: "uk-button uk-button-secondary uk-button-small" }, "Edit Profile")))),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-flex uk-flex-stretch uk-width-1-1" },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-width-1-3" },
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_Components_ProfileLeft__["a" /* default */], null)),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-width-2-3" },
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](Component, Object.assign({}, matchProps, { refreshToken: refreshToken })))))) : (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["Redirect"], { to: { pathname: '/' } })) })));
};
/* unused harmony default export */ var _unused_webpack_default_export = (Object(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["withRouter"])(ProfileLayout));


/***/ }),

/***/ "./src/Components/Layouts/MainLayout/Profile/style.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(undefined);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),

/***/ "./src/Components/Layouts/MainLayout/Public/index.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom__ = __webpack_require__("react-router-dom");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__style_css__ = __webpack_require__("./src/Components/Layouts/MainLayout/Public/style.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__style_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_Components_Layouts_Header__ = __webpack_require__("./src/Components/Layouts/Header/index.tsx");
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};




const PublicLayout = (props) => {
    const { component: Component, isAuthenticated, exact, refreshToken } = props, rest = __rest(props, ["component", "isAuthenticated", "exact", "refreshToken"]);
    return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["Route"], Object.assign({}, rest, { exact: exact !== null ? exact : true, render: (matchProps) => isAuthenticated !== true ? (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_0_react__["Fragment"], null,
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3_Components_Layouts_Header__["b" /* PublicHeader */], { me: props.me, isAuthenticated: isAuthenticated, logout: props.logout }),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](Component, Object.assign({}, matchProps, { refreshToken: refreshToken })))) : (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["Redirect"], { to: { pathname: '/home' } })) })));
};
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["withRouter"])(PublicLayout));


/***/ }),

/***/ "./src/Components/Layouts/MainLayout/Public/style.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(undefined);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),

/***/ "./src/Components/Layouts/MainLayout/index.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_Components_Layouts_MainLayout_Public__ = __webpack_require__("./src/Components/Layouts/MainLayout/Public/index.tsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_Components_Layouts_MainLayout_Private__ = __webpack_require__("./src/Components/Layouts/MainLayout/Private/index.tsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_Components_Layouts_MainLayout_Normal__ = __webpack_require__("./src/Components/Layouts/MainLayout/Normal/index.tsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_Components_Layouts_MainLayout_Profile__ = __webpack_require__("./src/Components/Layouts/MainLayout/Profile/index.tsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_Components_Layouts_MainLayout_ConnectLayout__ = __webpack_require__("./src/Components/Layouts/MainLayout/ConnectLayout/index.tsx");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_0_Components_Layouts_MainLayout_Public__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1_Components_Layouts_MainLayout_Private__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2_Components_Layouts_MainLayout_Normal__["a"]; });
/* unused harmony reexport ProfileLayout */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_4_Components_Layouts_MainLayout_ConnectLayout__["a"]; });








/***/ }),

/***/ "./src/Components/Layouts/SideBar/index.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom__ = __webpack_require__("react-router-dom");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__style_css__ = __webpack_require__("./src/Components/Layouts/SideBar/style.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__style_css__);

// import UIkit from 'uikit/src/js/uikit';

// import * as Logo from 'Assets/logo.png';

// tslint:disable-next-line:no-any
class SideBar extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
    componentDidMount() {
        // UIkit.notification('MyMessage', 'danger');
    }
    render() {
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { id: "offcanvas-nav", "uk-offcanvas": "overlay: true" },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-offcanvas-bar un-sidebar-container", style: { margin: 0, padding: 0, color: '#000' } },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("ul", { className: "uk-nav", style: { margin: 0, padding: 0, color: '#000' } },
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("li", null,
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["Link"], { to: "/home", className: "uk-light" },
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { className: "uk-margin-small-right", "uk-icon": "icon: home" }),
                            " Articles")),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("li", null,
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["Link"], { to: "/forum" },
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { className: "uk-margin-small-right", "uk-icon": "icon: thumbnails" }),
                            " Forums")),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("li", null,
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["Link"], { to: "/library" },
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { className: "uk-margin-small-right", "uk-icon": "icon: location" }),
                            " Library")),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("li", null,
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", { href: "#" },
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { className: "uk-margin-small-right", "uk-icon": "icon: rss" }),
                            " Connections")),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("li", null,
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", { href: "#" },
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { className: "uk-margin-small-right", "uk-icon": "icon: calendar" }),
                            " Calender")),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("li", { className: "uk-nav-divider" }),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("li", null,
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["Link"], { to: "/" },
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { className: "uk-margin-small-right", "uk-icon": "icon: thumbnails" }),
                            " Unizonn")),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("li", null,
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["Link"], { to: "/support" },
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { className: "uk-margin-small-right", "uk-icon": "icon: question" }),
                            " Support")),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("li", null,
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["Link"], { to: "/about" },
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { className: "uk-margin-small-right", "uk-icon": "icon: info" }),
                            " About"))))));
    }
}
/* harmony default export */ __webpack_exports__["a"] = (SideBar);


/***/ }),

/***/ "./src/Components/Layouts/SideBar/style.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(undefined);
// imports


// module
exports.push([module.i, ".un-sidebar-container {\n  background-color: #fff; }\n\n.un-sidebar-container ul {\n  list-style: none;\n  list-style-type: none; }\n\n.un-sidebar-container ul li {\n  color: black;\n  padding: 10px;\n  border-bottom: 1px solid snow; }\n", ""]);

// exports


/***/ }),

/***/ "./src/Components/LeftSideBar/index.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom__ = __webpack_require__("react-router-dom");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_apollo__ = __webpack_require__("react-apollo");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_apollo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_apollo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_Components_Label__ = __webpack_require__("./src/Components/Label/index.tsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_Components_TopInterest__ = __webpack_require__("./src/Components/TopInterest/index.tsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_glamorous__ = __webpack_require__("glamorous");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_glamorous___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_glamorous__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_Components_UserProfileBox__ = __webpack_require__("./src/Components/UserProfileBox/index.tsx");







const A = __WEBPACK_IMPORTED_MODULE_5_glamorous___default.a.a({
    fontFamily: 'brandon-grotesque',
    color: '#000000',
    paddingLeft: 5,
    paddingRight: 5,
    fontWeight: 'bold',
    textAlign: 'center',
    alignSelf: 'center'
});
// tslint:disable-next-line:no-any
class LeftSideBar extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
    render() {
        // const { loading } = this.state;
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: " uk-width-1-1" },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-width-1-1 raised card", style: { paddingTop: 30, marginBottom: 10 } },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_6_Components_UserProfileBox__["a" /* default */], { me: this.props.user })),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-width-1-1 raised card", style: { marginBottom: 10, padding: 0 } },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3_Components_Label__["a" /* default */], { text: "Top Interests" }),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4_Components_TopInterest__["a" /* default */], null),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("hr", null),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "fluid uk-padding-small" },
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "ui mini celled horizontal list" },
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", { className: "item" }, "About Us"),
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", { className: "item" }, "Terms & Terms"),
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", { className: "item" }, "Privacy"),
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", { className: "item" }, "Career"),
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", { className: "item" }, "Support")),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", null,
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("p", null, "Copyright @ 2018, Unizonn")))),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("hr", null)));
    }
}
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["withRouter"])(Object(__WEBPACK_IMPORTED_MODULE_2_react_apollo__["compose"])(__WEBPACK_IMPORTED_MODULE_2_react_apollo__["withApollo"])(LeftSideBar)));


/***/ }),

/***/ "./src/Components/LikeButton/index.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_Components_OverlayTriggerButton__ = __webpack_require__("./src/Components/OverlayTriggerButton/index.tsx");


class LikeButton extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
    constructor(props) {
        super(props);
        this.state = {
            liked: false,
            likeCount: 0,
        };
        this.state = {
            liked: this.props.liked,
            likeCount: this.props.likeCount,
        };
        this.onUnlikeClick = this.onUnlikeClick.bind(this);
        this.onLikeClick = this.onLikeClick.bind(this);
    }
    componentWillMount() {
        /*const { likeableType, likeableId } = this.props;
    this.token = PubSub.subscribe('LikeButton:onClick', (msg, data) => {
      if (likeableType === data.type && likeableId === data.id) {
        this.setState({ liked: data.liked, likeCount: data.count });
      }
    });*/
    }
    componentWillUnmount() {
        // PubSub.unsubscribe(this.token);
    }
    render() {
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "like-button" },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "like-button-wrapper" }, this.renderLikeButton()),
            this.renderLikeCount()));
    }
    renderLikeButton() {
        if (this.state.liked) {
            return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("button", { className: "response-count unlike-button uk-text-center", onClick: this.onUnlikeClick },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("i", { className: "fa fa-heart fa-5x animated bounceIn" })));
        }
        else {
            return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("button", { className: "response-count uk-margin-left uk-margin-right", onClick: this.onLikeClick },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("i", { className: "fa fa-heart-o fa-5x animated bounceIn" })));
        }
    }
    renderLikeCount() {
        if (this.state.likeCount === 0) {
            return null;
        }
        if (this.props.disableOverlay) {
            return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { className: "like-count" }, this.state.likeCount);
        }
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { className: "like-count", style: { cursor: 'pointer' } },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_Components_OverlayTriggerButton__["a" /* default */], { text: this.state.likeCount.toString(), overlayHeading: this.props.overlayHeading ? this.props.overlayHeading : '' })));
    }
    // tslint:disable-next-line:typedef
    onUnlikeClick(e) {
        // this.setState({ liked: data.liked, likeCount: data.count });
    }
    // tslint:disable-next-line:typedef
    onLikeClick(e) {
        // this.setState({ liked: data.liked, likeCount: data.count });
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = LikeButton;



/***/ }),

/***/ "./src/Components/Loading/index.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);

const LoadingComponent = () => {
    return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-position-center" },
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "loader uk-margin-small" },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "bullet" }),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "bullet" }),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "bullet" }),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "bullet" })));
};
/* unused harmony export LoadingComponent */

/* harmony default export */ __webpack_exports__["a"] = (LoadingComponent);


/***/ }),

/***/ "./src/Components/Map/index.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_recompose__ = __webpack_require__("recompose");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_recompose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_recompose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_google_maps__ = __webpack_require__("react-google-maps");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_google_maps___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_google_maps__);



const MapComponent = Object(__WEBPACK_IMPORTED_MODULE_1_recompose__["compose"])(Object(__WEBPACK_IMPORTED_MODULE_1_recompose__["withProps"])({
    googleMapURL: 'https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places',
    loadingElement: __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { style: { height: `100%` } }),
    containerElement: __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { style: { height: `400px` } }),
    mapElement: __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { style: { height: `100%` } }),
}), __WEBPACK_IMPORTED_MODULE_2_react_google_maps__["withScriptjs"], __WEBPACK_IMPORTED_MODULE_2_react_google_maps__["withGoogleMap"])((props) => (
// tslint:disable-next-line:jsx-wrap-multiline
__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_0_react__["Fragment"], null,
    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_react_google_maps__["GoogleMap"], { defaultZoom: 8, defaultCenter: {
            lat: props.lat,
            lng: props.lng,
        } }, props.isMarkerShown && (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_react_google_maps__["Marker"], { position: { lat: props.lat, lng: props.lng }, onClick: props.onMarkerClick }))))));
/* harmony default export */ __webpack_exports__["a"] = (MapComponent);


/***/ }),

/***/ "./src/Components/OverlayTriggerButton/index.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);

class OverlayTriggerButton extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
    constructor(props) {
        super(props);
        this.handleOpenClick = this.handleOpenClick.bind(this);
    }
    render() {
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", null,
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { dangerouslySetInnerHTML: { __html: this.props.text }, onClick: this.handleOpenClick })));
    }
    // tslint:disable-next-line:typedef
    handleOpenClick(event) {
        /* Notify UserOverlay component
    PubSub.publish('OverlayTriggerButton:onClick', {
      endpoint: this.props.apiEndpoint,
      overlayHeading: this.props.overlayHeading
    });
    */
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = OverlayTriggerButton;



/***/ }),

/***/ "./src/Components/PersonItem/index.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_Components_Avatar__ = __webpack_require__("./src/Components/Avatar/index.tsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_Components_FollowButton__ = __webpack_require__("./src/Components/FollowButton/index.tsx");



// tslint:disable-next-line:typedef
class PersonItem extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
    constructor() {
        super(...arguments);
        this.connectTo = () => {
            alert('hoho');
        };
        this.disConnectTo = () => {
            alert('hoho');
        };
    }
    render() {
        const { name, url } = this.props;
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "tile tile-centered px-2" },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "tile-icon" },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_Components_Avatar__["a" /* default */], { url: url, size: 40, presence: false })),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "tile-content" },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "tile-title" }, name),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "tile-subtitle text-gray" }, "I like to eat alot everyday with")),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "tile-action" },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_Components_FollowButton__["a" /* default */], { liked: false, small: true, followClick: () => this.connectTo(), unFollowClick: () => this.disConnectTo() }))));
    }
}
/* harmony default export */ __webpack_exports__["a"] = (PersonItem);


/***/ }),

/***/ "./src/Components/PopoverLink/index.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom__ = __webpack_require__("react-router-dom");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_Components_FollowButton__ = __webpack_require__("./src/Components/FollowButton/index.tsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_Components_Avatar__ = __webpack_require__("./src/Components/Avatar/index.tsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_link__ = __webpack_require__("./src/link.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__constants__ = __webpack_require__("./src/constants.ts");






class PopoverLink extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
    constructor() {
        super(...arguments);
        this.state = {
            // tslint:disable-next-line:no-object-literal-type-assertion
            me: {}
        };
    }
    componentWillMount() {
        const me = __WEBPACK_IMPORTED_MODULE_4_link__["a" /* cookies */].get(__WEBPACK_IMPORTED_MODULE_5__constants__["b" /* CURRENT_USER */]);
        this.setState({ me });
    }
    render() {
        const { user } = this.props;
        const { me } = this.state;
        const styleIt = this.props.bigger ? { fontSize: 17 } : {};
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { className: "boundary" },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("p", { style: { margin: 0 } },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["Link"], { to: `/${this.props.user.username}`, className: "uk-text-bold ", style: styleIt },
                    this.props.children,
                    " ",
                    ' '),
                "@",
                user.username),
            user.id === me.id ?
                null :
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { "uk-drop": "boundary: .boundary; animation: uk-animation-slide-top-small; duration: 500" },
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-card uk-card-body uk-card-default" },
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-text-center content" },
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-background-primary uk-width-1-1 uk-position-top", style: { height: 80 } }),
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3_Components_Avatar__["a" /* default */], { size: 60, url: user.avatar ? user.avatar.url : '', presence: false }),
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("p", { className: "uk-text-bold", style: { fontSize: 16, paddingBottom: 1, marginBottom: 1 } },
                                user.firstname,
                                " ",
                                user.lastname),
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("p", { className: "", style: { fontSize: 12 } },
                                "@",
                                user.username),
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("p", { style: { fontSize: 12 } }, "Founder at Gueva Technologies. Geek, programmer, interest in AI and Machine Learning, Big Data, love basketball."),
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("p", { className: "uk-text-bold ui label" }, user.type),
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("hr", null),
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "ui small two buttons" },
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_Components_FollowButton__["a" /* default */], { liked: false, unFollowClick: () => alert('hj'), followClick: () => alert('hoS') })))))));
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = PopoverLink;



/***/ }),

/***/ "./src/Components/ProfileLeft/index.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom__ = __webpack_require__("react-router-dom");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_apollo__ = __webpack_require__("react-apollo");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_apollo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_apollo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_Graphql_Query__ = __webpack_require__("./src/Graphql/Query/index.ts");




// tslint:disable-next-line:no-any
class ProfileLeft extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
    constructor() {
        super(...arguments);
        this.state = {
            text: '',
            loading: false,
        };
        this.checkUser = (e) => {
            e.preventDefault();
            this.setState({ loading: true });
            this.props.client
                .query({
                query: __WEBPACK_IMPORTED_MODULE_3_Graphql_Query__["j" /* USER_EXIST */],
                variables: {
                    email: this.state.text,
                },
            })
                .then(({ data }) => {
                data.userExist
                    ? this.props.history.push({
                        pathname: '/login',
                        email: this.state.text,
                    })
                    : this.props.history.push({
                        pathname: '/signup',
                        email: this.state.text,
                    });
                this.setState({ loading: false });
            })
                .catch((error) => {
                this.setState({ loading: false });
            });
        };
    }
    render() {
        // const { loading } = this.state;
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", null,
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-card uk-card-default uk-width-1-1" },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("h1", null, "Rex Raphael"),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("h1", null, "21 Connections"),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("p", null, "Xfullstack Engineer, Dev Ops Manager, with great love for javascript and nodejs"))));
    }
}
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["withRouter"])(Object(__WEBPACK_IMPORTED_MODULE_2_react_apollo__["compose"])(__WEBPACK_IMPORTED_MODULE_2_react_apollo__["withApollo"], Object(__WEBPACK_IMPORTED_MODULE_2_react_apollo__["graphql"])(__WEBPACK_IMPORTED_MODULE_3_Graphql_Query__["j" /* USER_EXIST */], {
    name: 'user',
    options: { variables: { email: '' } },
}))(ProfileLeft)));


/***/ }),

/***/ "./src/Components/RightSideBar/index.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom__ = __webpack_require__("react-router-dom");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_apollo__ = __webpack_require__("react-apollo");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_apollo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_apollo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_Components_ConnectBox__ = __webpack_require__("./src/Components/ConnectBox/index.tsx");




// tslint:disable-next-line:no-any
class LeftSideBar extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
    render() {
        // const { loading } = this.state;
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "card uk-width-1-1" },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-width-1-1", style: { marginBottom: 10, padding: 0 } },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3_Components_ConnectBox__["a" /* default */], null)),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-width-1-1", style: { marginBottom: 10, padding: 0 } },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3_Components_ConnectBox__["a" /* default */], null))));
    }
}
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["withRouter"])(Object(__WEBPACK_IMPORTED_MODULE_2_react_apollo__["compose"])(__WEBPACK_IMPORTED_MODULE_2_react_apollo__["withApollo"])(LeftSideBar)));


/***/ }),

/***/ "./src/Components/SearchBar/index.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style_scss__ = __webpack_require__("./src/Components/SearchBar/style.scss");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__style_scss__);


class SearchBar extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
    constructor(props) {
        super(props);
    }
    render() {
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("form", { className: `uk-search uk-search-default uk-form-width-large ${this.props.className}` },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", { href: "", className: "uk-search-icon-flip", "uk-search-icon": "icon: search" }),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("input", { className: "uk-search-input uk-form-width-large", type: "search", placeholder: "Search..." })));
    }
    // tslint:disable-next-line:typedef
    handleInputChange(term) {
        this.props.onSearchTermChange(term);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = SearchBar;



/***/ }),

/***/ "./src/Components/SearchBar/style.scss":
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/Components/SearchContainer/index.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__("lodash");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_Components_SearchBar__ = __webpack_require__("./src/Components/SearchBar/index.tsx");
// tslint:disable



class SearchContainer extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
    constructor() {
        super(...arguments);
        this.state = {
            isLoading: false,
            results: [],
            value: '',
            showDropdown: false,
            posts: [],
            users: [],
            tags: []
        };
        this.resetComponent = () => this.setState({ isLoading: false, results: [], value: '' });
        this.handleResultSelect = (e, { result }) => this.setState({ value: result.title });
        this.handleSearchChange = (e, { value }) => {
            this.setState({ isLoading: true, value });
            setTimeout(() => {
                if (this.state.value.length < 1)
                    return this.resetComponent();
                const re = new RegExp(__WEBPACK_IMPORTED_MODULE_1_lodash___default.a.escapeRegExp(this.state.value), 'i');
                const isMatch = result => re.test(result.title);
                this.setState({
                    isLoading: false,
                    results: 'klk'
                });
            }, 300);
        };
    }
    componentWillMount() {
        this.resetComponent();
    }
    render() {
        const { isLoading, value, results } = this.state;
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_Components_SearchBar__["a" /* default */], Object.assign({ loading: isLoading, onResultSelect: this.handleResultSelect, onSearchChange: () => __WEBPACK_IMPORTED_MODULE_1_lodash___default.a.debounce(this.handleSearchChange, 500, {
                leading: true
            }), results: results, noResultsDescription: "Course not available", value: value, className: "uk-width-1-1" }, this.props)));
    }
    renderSearchResults() {
        if (!this.state.showDropdown ||
            (this.state.posts.length === 0 && this.state.users.length === 0
                && this.state.tags.length === 0)) {
            return;
        }
        return (null);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = SearchContainer;



/***/ }),

/***/ "./src/Components/SeoMaker/index.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_helmet__ = __webpack_require__("react-helmet");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_helmet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_helmet__);


const SeoMaker = ({ title, description, seoTags, buffer, words }) => {
    return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_helmet___default.a, null,
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("title", null, `Unizonn | ${title ? title : title} `),
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("meta", { name: "an inclusive community", content: "Unizonn community" }),
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("meta", { name: "description" }, description ? description : null),
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("meta", { name: "description" }, description ? description : null),
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("meta", { name: "description" }, description ? description : null),
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("meta", { name: "description" }, description ? description : null),
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("meta", { name: "description" }, description ? description : null),
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("meta", { name: "description" }, description ? description : null),
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("meta", { name: "description" }, description ? description : null)));
};
/* harmony default export */ __webpack_exports__["a"] = (SeoMaker);


/***/ }),

/***/ "./src/Components/TopInterest/index.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_Components_InterestItemSlim__ = __webpack_require__("./src/Components/InterestItemSlim/index.tsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_apollo__ = __webpack_require__("react-apollo");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_apollo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_apollo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_Components_EmptyStates__ = __webpack_require__("./src/Components/EmptyStates/index.tsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_Graphql_Query__ = __webpack_require__("./src/Graphql/Query/index.ts");





const TopInterest = Object(__WEBPACK_IMPORTED_MODULE_2_react_apollo__["graphql"])(__WEBPACK_IMPORTED_MODULE_4_Graphql_Query__["d" /* ALL_INTEREST */], {
    props: ({ data }) => (Object.assign({}, data)),
});
/* harmony default export */ __webpack_exports__["a"] = (TopInterest(({ loading, allInterest, error }) => {
    if (loading) {
        return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3_Components_EmptyStates__["b" /* LoadingComponent */], null);
    }
    if (error) {
        return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3_Components_EmptyStates__["a" /* ErrorComponent */], null);
    }
    return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "tags-wrapper uk-padding-small undefined" }, allInterest.map((interest, i) => (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_Components_InterestItemSlim__["a" /* default */], { key: interest.id, url: interest.avatar, name: interest.name })))));
}));


/***/ }),

/***/ "./src/Components/UserProfileBox/index.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_Components_Avatar__ = __webpack_require__("./src/Components/Avatar/index.tsx");


// tslint:disable-next-line:typedef
const UserProfileBox = (props) => {
    return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-width-1-1 uk-text-center uk-padding-small" },
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-background-primary uk-width-1-1 uk-position-top", style: { height: 75 } }),
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_Components_Avatar__["a" /* default */], { size: 60, 
            // tslint:disable-next-line:max-line-length
            url: props.me.avatar ? props.me.avatar.url : '', presence: false }),
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("p", { className: "uk-text-bold", style: { fontSize: 16 } },
            props.me.firstname,
            " ",
            props.me.lastname),
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("p", { style: { fontSize: 12 } }, "Founder at Gueva Technologies. Geek, programmer, interest in AI and Machine Learning, Big Data, love basketball."),
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "ui small two buttons" },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("button", { className: "ui left positive attached button" }, "29k Posts"),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("button", { className: "right positive attached ui button" }, "Connects 56k"))));
};
/* harmony default export */ __webpack_exports__["a"] = (UserProfileBox);


/***/ }),

/***/ "./src/Components/WriteModal/index.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom__ = __webpack_require__("react-router-dom");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__);


// tslint:disable-next-line:no-any
class WriteModal extends __WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"] {
    render() {
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-card uk-card-default uk-width-1-1 uk-margin-bottom" },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-flex header uk-padding-small" },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["Link"], { to: "/write" },
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { style: { paddingLeft: 10 } },
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("p", { className: "uk-text-bold", style: { fontSize: 23, color: '#000' } }, "Share an article..."))))));
    }
}
/* harmony default export */ __webpack_exports__["a"] = (WriteModal);


/***/ }),

/***/ "./src/Containers/App/index.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom__ = __webpack_require__("react-router-dom");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_helmet__ = __webpack_require__("react-helmet");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_helmet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_helmet__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_apollo__ = __webpack_require__("react-apollo");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_apollo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_apollo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_async_component__ = __webpack_require__("react-async-component");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_async_component___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_async_component__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_Components_Layouts_MainLayout__ = __webpack_require__("./src/Components/Layouts/MainLayout/index.tsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_Utils_jwtHelper__ = __webpack_require__("./src/Utils/jwtHelper.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__constants__ = __webpack_require__("./src/constants.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_Components_Loading__ = __webpack_require__("./src/Components/Loading/index.tsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_Components_Layouts_SideBar__ = __webpack_require__("./src/Components/Layouts/SideBar/index.tsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_Graphql_Query__ = __webpack_require__("./src/Graphql/Query/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_Theme_application_scss__ = __webpack_require__("./src/Theme/application.scss");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_Theme_application_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_Theme_application_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_link__ = __webpack_require__("./src/link.ts");












// import 'Theme/theme.less';
// import '../semantic-ui-theme';

// import { cookies } from '../../link';
const Home = Object(__WEBPACK_IMPORTED_MODULE_4_react_async_component__["asyncComponent"])({
    resolve: () => new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, "./src/Containers/Home/index.tsx")),
    LoadingComponent: () => __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_8_Components_Loading__["a" /* default */], null)
});
const NotFound = Object(__WEBPACK_IMPORTED_MODULE_4_react_async_component__["asyncComponent"])({
    resolve: () => new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, "./src/Containers/NotFound/index.tsx")),
    LoadingComponent: () => __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_8_Components_Loading__["a" /* default */], null),
});
const Profile = Object(__WEBPACK_IMPORTED_MODULE_4_react_async_component__["asyncComponent"])({
    resolve: () => new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, "./src/Containers/Profile/index.tsx")),
    LoadingComponent: () => __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_8_Components_Loading__["a" /* default */], null),
});
const PublicHome = Object(__WEBPACK_IMPORTED_MODULE_4_react_async_component__["asyncComponent"])({
    resolve: () => new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, "./src/Containers/HomePublic/index.tsx")),
    LoadingComponent: () => __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_8_Components_Loading__["a" /* default */], null),
});
const Login = Object(__WEBPACK_IMPORTED_MODULE_4_react_async_component__["asyncComponent"])({
    resolve: () => new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, "./src/Containers/Auth/Login/index.tsx")),
    LoadingComponent: () => __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_8_Components_Loading__["a" /* default */], null),
});
const Signup = Object(__WEBPACK_IMPORTED_MODULE_4_react_async_component__["asyncComponent"])({
    resolve: () => new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, "./src/Containers/Auth/Signup/index.tsx")),
    LoadingComponent: () => __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_8_Components_Loading__["a" /* default */], null),
});
const ArticleDetail = Object(__WEBPACK_IMPORTED_MODULE_4_react_async_component__["asyncComponent"])({
    resolve: () => new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, "./src/Containers/ArticleDetail/index.tsx")),
    LoadingComponent: () => __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_8_Components_Loading__["a" /* default */], null),
});
const Interest = Object(__WEBPACK_IMPORTED_MODULE_4_react_async_component__["asyncComponent"])({
    resolve: () => new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, "./src/Containers/Auth/Signup/interest.tsx")),
    LoadingComponent: () => __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_8_Components_Loading__["a" /* default */], null),
});
const Maps = Object(__WEBPACK_IMPORTED_MODULE_4_react_async_component__["asyncComponent"])({
    resolve: () => new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, "./src/Containers/Maps/index.tsx")),
    LoadingComponent: () => __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_8_Components_Loading__["a" /* default */], null),
});
const Compose = Object(__WEBPACK_IMPORTED_MODULE_4_react_async_component__["asyncComponent"])({
    resolve: () => new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, "./src/Containers/ComposeArticle/index.tsx")),
    LoadingComponent: () => __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_8_Components_Loading__["a" /* default */], null),
});
const Message = Object(__WEBPACK_IMPORTED_MODULE_4_react_async_component__["asyncComponent"])({
    resolve: () => new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, "./src/Containers/Message/index.tsx")),
    LoadingComponent: () => __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_8_Components_Loading__["a" /* default */], null),
});
const Forum = Object(__WEBPACK_IMPORTED_MODULE_4_react_async_component__["asyncComponent"])({
    resolve: () => new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, "./src/Containers/Forum/index.tsx")),
    LoadingComponent: () => __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_8_Components_Loading__["a" /* default */], null),
});
const Connections = Object(__WEBPACK_IMPORTED_MODULE_4_react_async_component__["asyncComponent"])({
    resolve: () => new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, "./src/Containers/Connection/index.tsx")),
    LoadingComponent: () => __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_8_Components_Loading__["a" /* default */], null),
});
const Search = Object(__WEBPACK_IMPORTED_MODULE_4_react_async_component__["asyncComponent"])({
    resolve: () => new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, "./src/Containers/Connection/index.tsx")),
    LoadingComponent: () => __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_8_Components_Loading__["a" /* default */], null),
});
const FinishSignup = Object(__WEBPACK_IMPORTED_MODULE_4_react_async_component__["asyncComponent"])({
    resolve: () => new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, "./src/Containers/Auth/Signup/finishSignup.tsx")),
    LoadingComponent: () => __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_8_Components_Loading__["a" /* default */], null),
});
const SignupProfile = Object(__WEBPACK_IMPORTED_MODULE_4_react_async_component__["asyncComponent"])({
    resolve: () => new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, "./src/Containers/Auth/Signup/signupProfile.tsx")),
    LoadingComponent: () => __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_8_Components_Loading__["a" /* default */], null),
});
class App extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
    constructor() {
        super(...arguments);
        this.state = {
            isAuthenticated: false,
            token: '',
            expireToken: false,
            avatar: '',
            // tslint:disable-next-line:no-object-literal-type-assertion
            me: {},
        };
        this.refreshToken = (token) => {
            this.setState({
                token,
            });
            if (token !== '' && token !== undefined) {
                this.setState({
                    isAuthenticated: true,
                });
                this.loadMe();
            }
        };
        this._logout = () => {
            __WEBPACK_IMPORTED_MODULE_12_link__["a" /* cookies */].remove(__WEBPACK_IMPORTED_MODULE_7__constants__["a" /* AUTH_TOKEN */], '', -1);
            this.setState({ isAuthenticated: false });
            this.setState({ token: '' });
            this.setState({ expireToken: false });
        };
    }
    componentWillMount() {
        this.props.client.query({
            query: __WEBPACK_IMPORTED_MODULE_10_Graphql_Query__["i" /* ME */]
        }).then((res) => {
            console.log(res.data.me);
            this.setState({ me: res.data.me });
        });
        const token = __WEBPACK_IMPORTED_MODULE_12_link__["a" /* cookies */].get(__WEBPACK_IMPORTED_MODULE_7__constants__["a" /* AUTH_TOKEN */]);
        /*cookies.set('test', 'a', {
          expires: new Date(2020-05-04),
          path: '/api',
          domain: '*.example.com',
          secure: true
        });*/
        if (token !== null && token !== undefined) {
            const expired = Object(__WEBPACK_IMPORTED_MODULE_6_Utils_jwtHelper__["a" /* isTokenExpired */])(token);
            if (!expired) {
                this.setState({ isAuthenticated: true });
                this.setState({ token });
                this.setState({ expireToken: expired });
                this.loadMe();
            }
            else {
                __WEBPACK_IMPORTED_MODULE_12_link__["a" /* cookies */].remove(__WEBPACK_IMPORTED_MODULE_7__constants__["a" /* AUTH_TOKEN */], '', -1);
                this.setState({ isAuthenticated: false });
                this.setState({ token: '' });
                this.setState({ expireToken: false });
            }
        }
    }
    componentDidMount() {
        const ele = document.getElementById('ipl-progress-indicator');
        if (ele) {
            setTimeout(() => {
                ele.classList.add('available');
                setTimeout(() => {
                    ele.outerHTML = '';
                }, 2000);
            }, 1000);
        }
        console.log(this.props.me);
    }
    loadMe() {
        this.props.client
            .query({
            query: __WEBPACK_IMPORTED_MODULE_10_Graphql_Query__["i" /* ME */],
        })
            .then(({ data }) => {
            // tslint:disable-next-line:no-console
            console.log(data.me);
            this.setState({ me: data.me });
            if (data.me.completedProfile === 1) {
                this.props.history.replace('/add/profile');
            }
            else if (data.me.completedProfile === 2) {
                this.props.history.replace('/add/interest');
            }
            if (data.me.avata) {
                if (data.me.avata.url) {
                    this.setState({ avatar: data.me.avata.url });
                }
            }
            // tslint:disable-next-line:no-console
            console.log(this.state.avatar);
        })
            .catch((error) => {
            // localStorage.removeItem(AUTH_TOKEN);
            if (error) {
                // tslint:disable-next-line:no-console
                console.log(error);
                this._logout();
            }
        });
    }
    render() {
        const { isAuthenticated } = this.state;
        // const userAuthed = token ? true : false;
        // tslint:disable-next-line:no-console
        console.log(isAuthenticated);
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-offcanvas-content bg-muted", style: { backgroundColor: '#e1eaf1' } },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_react_helmet__["Helmet"], null,
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("title", null, "Unizonn"),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("meta", { name: "an inclusive community", content: "Unizonn community" })),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["Switch"], null,
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["Route"], { exact: true, path: "/", render: () => isAuthenticated ? (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_5_Components_Layouts_MainLayout__["c" /* PrivateLayout */], { exact: false, me: this.state.me, component: Home, isAuthenticated: isAuthenticated, logout: this._logout })) : (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_5_Components_Layouts_MainLayout__["d" /* PublicLayout */], { exact: false, me: this.state.me, component: PublicHome, isAuthenticated: isAuthenticated, logout: this._logout })) }),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_5_Components_Layouts_MainLayout__["c" /* PrivateLayout */], { me: this.state.me, component: Home, path: "/home", exact: false, isAuthenticated: isAuthenticated, logout: this._logout }),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_5_Components_Layouts_MainLayout__["b" /* EmptyLayout */], { me: this.state.me, exact: false, component: Profile, path: "/uz/:username", isAuthenticated: isAuthenticated, logout: this._logout }),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_5_Components_Layouts_MainLayout__["d" /* PublicLayout */], { component: Login, refreshToken: this.refreshToken, path: "/login", exact: true, isAuthenticated: isAuthenticated, logout: this._logout, me: this.state.me }),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_5_Components_Layouts_MainLayout__["d" /* PublicLayout */], { component: Login, exact: true, refreshToken: this.refreshToken, path: "/login/:email", isAuthenticated: isAuthenticated, logout: this._logout, me: this.state.me }),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_5_Components_Layouts_MainLayout__["d" /* PublicLayout */], { component: Signup, refreshToken: this.refreshToken, path: "/signup", exact: true, isAuthenticated: isAuthenticated, logout: this._logout, me: this.state.me }),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_5_Components_Layouts_MainLayout__["d" /* PublicLayout */], { component: Signup, exact: true, refreshToken: this.refreshToken, path: "/signup/:email", isAuthenticated: isAuthenticated, logout: this._logout, me: this.state.me }),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_5_Components_Layouts_MainLayout__["b" /* EmptyLayout */], { component: FinishSignup, path: "/signup/complete", exact: true, isAuthenticated: isAuthenticated, logout: this._logout, me: this.state.me }),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_5_Components_Layouts_MainLayout__["b" /* EmptyLayout */], { exact: true, component: SignupProfile, path: "/add/profile", isAuthenticated: isAuthenticated, logout: this._logout, me: this.state.me }),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_5_Components_Layouts_MainLayout__["b" /* EmptyLayout */], { path: "/article/:slug", isAuthenticated: isAuthenticated, component: ArticleDetail, exact: true, logout: this._logout, me: this.state.me }),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_5_Components_Layouts_MainLayout__["b" /* EmptyLayout */], { component: Interest, path: "/add/interest", isAuthenticated: isAuthenticated, logout: this._logout, exact: true, me: this.state.me }),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_5_Components_Layouts_MainLayout__["b" /* EmptyLayout */], { component: Maps, path: "/library", isAuthenticated: isAuthenticated, logout: this._logout, exact: true, me: this.state.me }),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_5_Components_Layouts_MainLayout__["b" /* EmptyLayout */], { component: Message, path: "/message", exact: true, isAuthenticated: isAuthenticated, logout: this._logout, me: this.state.me }),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_5_Components_Layouts_MainLayout__["b" /* EmptyLayout */], { component: Forum, path: "/forum", exact: true, isAuthenticated: isAuthenticated, logout: this._logout, me: this.state.me }),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_5_Components_Layouts_MainLayout__["a" /* ConnectLayout */], { component: Connections, path: "/connections", exact: true, isAuthenticated: isAuthenticated, logout: this._logout, me: this.state.me }),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_5_Components_Layouts_MainLayout__["b" /* EmptyLayout */], { component: Forum, exact: true, path: "/forum/:id", isAuthenticated: isAuthenticated, logout: this._logout, me: this.state.me }),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_5_Components_Layouts_MainLayout__["b" /* EmptyLayout */], { component: Compose, path: "/write", exact: true, isAuthenticated: isAuthenticated, logout: this._logout, me: this.state.me }),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_5_Components_Layouts_MainLayout__["b" /* EmptyLayout */], { component: Compose, path: "/write/:id", exact: true, isAuthenticated: isAuthenticated, logout: this._logout, me: this.state.me }),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_5_Components_Layouts_MainLayout__["b" /* EmptyLayout */], { component: Search, path: "/search/:school", exact: true, isAuthenticated: isAuthenticated, logout: this._logout, me: this.state.me }),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_5_Components_Layouts_MainLayout__["b" /* EmptyLayout */], { component: Search, path: "/search/:interest", exact: true, isAuthenticated: isAuthenticated, logout: this._logout, me: this.state.me }),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_5_Components_Layouts_MainLayout__["b" /* EmptyLayout */], { component: Search, path: "/search", exact: true, isAuthenticated: isAuthenticated, logout: this._logout, me: this.state.me }),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_5_Components_Layouts_MainLayout__["b" /* EmptyLayout */], { component: Search, path: "/search/:library", exact: true, isAuthenticated: isAuthenticated, logout: this._logout, me: this.state.me }),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_5_Components_Layouts_MainLayout__["b" /* EmptyLayout */], { component: Search, path: "/search/:user", exact: true, isAuthenticated: isAuthenticated, logout: this._logout, me: this.state.me }),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_5_Components_Layouts_MainLayout__["b" /* EmptyLayout */], { component: Search, path: "/search", exact: true, isAuthenticated: isAuthenticated, logout: this._logout, me: this.state.me }),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_5_Components_Layouts_MainLayout__["b" /* EmptyLayout */], { component: Search, path: "/search/:tags", exact: true, isAuthenticated: isAuthenticated, logout: this._logout, me: this.state.me }),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_5_Components_Layouts_MainLayout__["b" /* EmptyLayout */], { component: Profile, path: "/profile", exact: true, isAuthenticated: isAuthenticated, logout: this._logout, me: this.state.me }),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_5_Components_Layouts_MainLayout__["b" /* EmptyLayout */], { component: Profile, path: "/profile/:id", exact: true, isAuthenticated: isAuthenticated, logout: this._logout, me: this.state.me }),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["Route"], { component: NotFound, path: "*" }),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["Route"], { exact: true, path: "/:url" }),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_5_Components_Layouts_MainLayout__["c" /* PrivateLayout */], { path: "/logout", exact: true, isAuthenticated: isAuthenticated, render: () => this._logout(), logout: this._logout, me: this.state.me })),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_9_Components_Layouts_SideBar__["a" /* default */], null)));
    }
}
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["withRouter"])(Object(__WEBPACK_IMPORTED_MODULE_3_react_apollo__["compose"])(__WEBPACK_IMPORTED_MODULE_3_react_apollo__["withApollo"])(App)));


/***/ }),

/***/ "./src/Containers/ArticleDetail/index.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom__ = __webpack_require__("react-router-dom");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_apollo__ = __webpack_require__("react-apollo");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_apollo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_apollo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_medium_draft__ = __webpack_require__("medium-draft");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_medium_draft___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_medium_draft__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_Components_Avatar__ = __webpack_require__("./src/Components/Avatar/index.tsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_Components_ArticleItem__ = __webpack_require__("./src/Components/ArticleItem/index.tsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_Components_CommentEditor__ = __webpack_require__("./src/Components/CommentEditor/index.tsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_Components_TopInterest__ = __webpack_require__("./src/Components/TopInterest/index.tsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_Components_LikeButton__ = __webpack_require__("./src/Components/LikeButton/index.tsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_Components_PopoverLink__ = __webpack_require__("./src/Components/PopoverLink/index.tsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_react_timeago__ = __webpack_require__("react-timeago");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_react_timeago___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_react_timeago__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_Graphql_Query__ = __webpack_require__("./src/Graphql/Query/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_Components_Label__ = __webpack_require__("./src/Components/Label/index.tsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_medium_draft_lib_importer__ = __webpack_require__("medium-draft/lib/importer");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_medium_draft_lib_importer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_medium_draft_lib_importer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_draft_js__ = __webpack_require__("draft-js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_draft_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_draft_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_medium_draft_lib_index_css__ = __webpack_require__("./node_modules/medium-draft/lib/index.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_medium_draft_lib_index_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_medium_draft_lib_index_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__style_css__ = __webpack_require__("./src/Containers/ArticleDetail/style.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16__style_css__);

















class ArticleDetail extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
    constructor() {
        super(...arguments);
        this.state = {
            // tslint:disable-next-line:no-object-literal-type-assertion
            currentArticle: {},
            loading: true,
            editorState: Object(__WEBPACK_IMPORTED_MODULE_3_medium_draft__["createEditorState"])()
        };
    }
    componentWillMount() {
        const { match: { params } } = this.props;
        // tslint:disable-next-line:no-console
        console.log(params);
        if (params.slug) {
            this.fetchArticleandOthers(params.slug);
        }
        else {
            this.props.history.goBack();
        }
    }
    // tslint:disable-next-line:typedef
    componentDidUpdate(prevProps) {
        // tslint:disable-next-line:no-console
        console.log(prevProps);
        const oldId = prevProps.match.params.slug;
        const newId = this.props.match.params.slug;
        // tslint:disable-next-line:no-console
        console.log(oldId);
        if (newId !== oldId) {
            this.fetchArticleandOthers(oldId);
        }
    }
    fetchArticleandOthers(slugOrId) {
        this.props.client
            .query({
            query: __WEBPACK_IMPORTED_MODULE_11_Graphql_Query__["g" /* GET_ARTICLE_BY_ID */],
            variables: {
                id: slugOrId,
            },
        })
            .then((result) => {
            // tslint:disable-next-line:no-console
            console.log(result.data.getArticleById);
            const editorState = Object(__WEBPACK_IMPORTED_MODULE_3_medium_draft__["createEditorState"])(Object(__WEBPACK_IMPORTED_MODULE_14_draft_js__["convertToRaw"])(__WEBPACK_IMPORTED_MODULE_13_medium_draft_lib_importer___default()(result.data.getArticleById.body)));
            this.setState({ currentArticle: result.data.getArticleById, loading: false, editorState });
        })
            .catch((err) => {
            // tslint:disable-next-line:no-console
            console.log(err);
            this.props.history.replace('/not-found');
        });
    }
    componentWillUnmount() {
        // allows us to ignore
    }
    renderArticle(article) {
        const { author } = article;
        const { editorState } = this.state;
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-card card uk-card-small uk-width-1-1", style: { borderRadius: 1, marginBottom: 22, padding: 10, backgroundColor: '#fff' } },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-width-1-1 post-metadata uk-padding-remove-bottom uk-padding-small" },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-grid-small uk-flex uk-width-4-5", "uk-grid": true },
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-width-auto" },
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4_Components_Avatar__["a" /* default */], { url: author.avatar ? author.avatar.url : 'https://getuikit.com/docs/images/avatar.jpg', size: 50, presence: false })),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-width-auto post-info" },
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_9_Components_PopoverLink__["a" /* default */], { user: article.author, bigger: true, link: article.id },
                            author.firstname,
                            " ",
                            author.lastname),
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("p", { className: "uk-text-meta uk-margin-remove-top" },
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("time", { dateTime: article.createdAt },
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_10_react_timeago___default.a, { className: "timeago", date: article.createdAt }),
                                " ago \u0095",
                                ' ',
                                article.body.lengthInMinutes())))),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-width-1-5 uk-flex-center" },
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("button", { className: "uk-button uk-button-primary uk-button-small" }, "Connect"))),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-card-body uk-padding-remove-vertical", style: { paddingTop: 10, borderBottom: 1 } },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("h5", { className: "uk-text-medium uk-text-bold uk-text-break", style: { fontSize: 50, fontFamily: 'Open Sans' } }, article.title),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3_medium_draft__["Editor"], { editorState: editorState, editorEnabled: false })),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-padding-small" },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_7_Components_TopInterest__["a" /* default */], null)),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "post-stats clearfix uk-padding-small uk-padding-remove-horizontal", style: { paddingTop: 10, paddingBottom: 1 } },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-flex pull-left uk-padding-small" },
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_8_Components_LikeButton__["a" /* default */], { liked: true, likeCount: 2 }),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", { className: "response-count uk-margin-left" },
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { "uk-icon": "icon:  forward; ratio: 1.2" }),
                        "Share")),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-flex  response-count pull-right uk-padding-small" },
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "dropdown" },
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("button", { className: "uk-button uk-button-text uk-margin-right", type: "button" },
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { "uk-icon": "icon: more; ratio: 1.0" })),
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { "data-uk-drop": "mode: click; pos: bottom-right" },
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("ul", { className: "menu" },
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("li", { className: "menu-item uk-padding-small" },
                                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", { href: "#", className: "uk-text-bold" },
                                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { "uk-icon": "icon: plus-circle; ratio: 1" }),
                                        " Activity")),
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("li", { className: "menu-item uk-padding-small" },
                                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", { href: "#", className: "uk-text-bold" },
                                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { "uk-icon": "icon: warning; ratio: 1" }),
                                        " Don't like this")),
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("li", { className: "menu-item uk-padding-small" },
                                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", { href: "#", className: "uk-text-bold" },
                                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { "uk-icon": "icon: info; ratio: 1" }),
                                        " Report"))))),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("button", { className: "uk-button uk-button-text" },
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { "uk-icon": "icon: bookmark; ratio: 1.2" }),
                        " Favourite")))));
    }
    renderCommentBox() {
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-card card uk-card-small uk-width-1-1", style: { borderRadius: 1, marginBottom: 30, padding: 10, backgroundColor: '#fff' } },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-grid-small uk-flex", "uk-grid": true, style: { padding: 0, marginTop: 3 } },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-width-auto" },
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4_Components_Avatar__["a" /* default */], { url: 'https://getuikit.com/docs/images/avatar.jpg', size: 30, presence: false })),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-width-auto post-info" }, "John Doe")),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_6_Components_CommentEditor__["a" /* default */], null),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", null,
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("button", { className: "uk-button uk-button-primary uk-button-small uk-text-right" }, "Comment"))));
    }
    renderComment() {
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("article", { className: "uk-comment card uk-visible-toggle uk-padding-small", style: { backgroundColor: '#fff', marginBottom: 10 } },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("header", { className: "uk-comment-header uk-position-relative" },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-grid-medium uk-flex-middle", "data-uk-grid": true },
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-width-auto" },
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4_Components_Avatar__["a" /* default */], { url: "https://getuikit.com/docs/images/avatar.jpg", size: 40, presence: false })),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-width-expand" },
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("h4", { className: "uk-comment-title uk-margin-remove" },
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", { className: "uk-link-reset", href: "#" }, "Author")),
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("p", { className: "uk-comment-meta uk-margin-remove-top" },
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", { className: "uk-link-reset", href: "#" }, "12 days ago")))),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-position-top-right uk-position-small uk-hidden-hover" },
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", { className: "uk-link-muted", href: "#" }, "Reply"))),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-comment-body" },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("p", null, "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."))));
    }
    renderCommentList() {
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { id: "comments", className: "uk-card uk-card-small uk-card-small uk-width-1-1", style: { backgroundColor: 'transparent' } },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_12_Components_Label__["a" /* default */], { text: "Comment responses" }),
            this.renderComment()));
    }
    render() {
        if (this.state.loading) {
            // tslint:disable-next-line:jsx-wrap-multiline
            return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-position-center" },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "loader uk-margin-small" },
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "bullet" }),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "bullet" }),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "bullet" }),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "bullet" }))));
        }
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-width-1-1 uk-padding" },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-width-1-1 uk-grid uk-flex-stretch" },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-width-2-3@m uk-width-3-3@s" },
                    this.renderArticle(this.state.currentArticle),
                    this.renderCommentBox(),
                    this.renderCommentList()),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-width-1-3@m uk-width-1-1@s" },
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_12_Components_Label__["a" /* default */], { text: "Similar articles" }),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_5_Components_ArticleItem__["a" /* default */], { article: this.state.currentArticle, small: true }),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_5_Components_ArticleItem__["a" /* default */], { article: this.state.currentArticle, small: true }),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_5_Components_ArticleItem__["a" /* default */], { article: this.state.currentArticle, small: true })))));
    }
}
/* harmony default export */ __webpack_exports__["default"] = (Object(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["withRouter"])(Object(__WEBPACK_IMPORTED_MODULE_2_react_apollo__["compose"])(__WEBPACK_IMPORTED_MODULE_2_react_apollo__["withApollo"])(ArticleDetail)));


/***/ }),

/***/ "./src/Containers/ArticleDetail/style.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(undefined);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),

/***/ "./src/Containers/Auth/Login/index.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom__ = __webpack_require__("react-router-dom");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_apollo__ = __webpack_require__("react-apollo");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_apollo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_apollo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_helmet__ = __webpack_require__("react-helmet");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_helmet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_helmet__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_Graphql_Mutation__ = __webpack_require__("./src/Graphql/Mutation/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_Utils_helpers__ = __webpack_require__("./src/Utils/helpers.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_uikit__ = __webpack_require__("uikit");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_uikit___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_uikit__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__style_scss__ = __webpack_require__("./src/Containers/Auth/Login/style.scss");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__style_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__constants__ = __webpack_require__("./src/constants.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_link__ = __webpack_require__("./src/link.ts");










class Login extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
    constructor() {
        super(...arguments);
        this.state = {
            show: false,
            email: '',
            password: '',
            everFocusedEmail: false,
            everFocusedPassword: false,
            inFocus: '',
            loading: false,
        };
        this.handleEmailChange = (evt) => {
            this.setState({ email: evt.target.value });
        };
        this.handlePasswordChange = (evt) => {
            this.setState({ password: evt.target.value });
        };
        this.handleSubmit = (evt) => {
            evt.preventDefault();
            console.log('error from');
            if (!this.canBeSubmitted()) {
                return;
            }
            this.setState({ loading: true });
            const { email, password } = this.state;
            this.props
                .login({
                variables: {
                    email,
                    password,
                },
            })
                .then((result) => {
                const token = result.data.login.token;
                const user = result.data.login.user;
                __WEBPACK_IMPORTED_MODULE_9_link__["a" /* cookies */].set(__WEBPACK_IMPORTED_MODULE_8__constants__["a" /* AUTH_TOKEN */], token);
                __WEBPACK_IMPORTED_MODULE_9_link__["a" /* cookies */].set(__WEBPACK_IMPORTED_MODULE_8__constants__["b" /* CURRENT_USER */], result.data.login.user);
                this.props.refreshToken(token);
                this.setState({ loading: false });
                if (user.completedProfile === 1) {
                    this.props.history.replace('/add/profile');
                }
                else {
                    this.props.history.replace('/');
                }
            })
                .catch((err) => {
                this.setState({ loading: false });
                __WEBPACK_IMPORTED_MODULE_6_uikit__["notification"](`Error: ${err.message}`, { status: 'danger', pos: 'top-right' });
            });
        };
    }
    componentWillMount() {
        const email = this.props.location.email;
        if (email) {
            this.setState({ email });
        }
    }
    canBeSubmitted() {
        const errors = Object(__WEBPACK_IMPORTED_MODULE_5_Utils_helpers__["a" /* validateLogin */])(this.state.email, this.state.password);
        const isDisabled = Object.keys(errors).some((x) => errors[x]);
        return !isDisabled;
    }
    render() {
        const errors = Object(__WEBPACK_IMPORTED_MODULE_5_Utils_helpers__["a" /* validateLogin */])(this.state.email, this.state.password);
        const isDisabled = Object.keys(errors).some((x) => errors[x]);
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-flex uk-flex-stretch", "data-uk-grid": true, style: { height: '100vh', backgroundColor: '#ffffff' } },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3_react_helmet__["Helmet"], null,
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("title", null, "Unizonn | Login"),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("meta", { name: "an inclusive community", content: "Unizonn login" })),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-width-2-5 sideBg uk-visible@m", id: "sideBg" },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-flex uk-flex-stretch uk-flex-middle" }, ".")),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-container uk-width-3-5@m uk-width-1-1@s uk-flex\n                  uk-flex-stretch uk-flex-middle" },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("form", { className: "uk-form-vertical uk-width-1-1 uk-margin-large uk-padding-large uk-padding-remove-vertical", onSubmit: this.handleSubmit },
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-margin" },
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("h3", { className: "uk-heading-primary uk-align-center" }, "Login ")),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-margin" },
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-inline uk-width-1-1" },
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { className: "uk-form-icon", "uk-icon": "icon: user" }),
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("input", { className: `uk-input ${errors.password ? 'uk-form-danger' : ''} `, type: "email", value: this.state.email, required: true, onChange: this.handleEmailChange }))),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-margin" },
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-inline uk-width-1-1" },
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { className: "uk-form-icon", "uk-icon": "icon: lock" }),
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("input", { className: `uk-input ${errors.password ? 'uk-form-danger' : ''} `, type: "password", value: this.state.password, required: true, onChange: this.handlePasswordChange }))),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-margin" },
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", { className: `uk-button uk-button-text}` }, "Forgot password?")),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-margin" }, this.state.loading ? (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-spinner uk-icon", "data-uk-spinner": "ratio: 1", style: { color: 'green' } })) : (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("button", { className: `uk-button uk-button-primary uk-width-1-1
                    uk-align-right ${isDisabled ? 'disabled' : 'disabled'}`, type: "submit" }, "LOGIN"))),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("br", null),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("hr", { className: "uk-divider-icon" }),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-margin" },
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("p", { className: `uk-button uk-button-text}` }, "Don't have an account?"),
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["Link"], { className: `uk-button uk-button-secondary
                 uk-align-right`, to: "/signup" }, "Sign up now"))))));
    }
}
/* harmony default export */ __webpack_exports__["default"] = (Object(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["withRouter"])(Object(__WEBPACK_IMPORTED_MODULE_2_react_apollo__["compose"])(__WEBPACK_IMPORTED_MODULE_2_react_apollo__["withApollo"], Object(__WEBPACK_IMPORTED_MODULE_2_react_apollo__["graphql"])(__WEBPACK_IMPORTED_MODULE_4_Graphql_Mutation__["e" /* LOGIN_USER */], {
    name: 'login',
}))(Login)));


/***/ }),

/***/ "./src/Containers/Auth/Login/style.scss":
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/Containers/Auth/Signup/finishSignup.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom__ = __webpack_require__("react-router-dom");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__style_css__ = __webpack_require__("./src/Containers/Auth/Signup/style.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__style_css__);



class FinishPage extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
    render() {
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-width-1-1", style: { height: '100vh', backgroundColor: 'teal' } }, "Finihesd"));
    }
}
/* harmony default export */ __webpack_exports__["default"] = (Object(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["withRouter"])(FinishPage));


/***/ }),

/***/ "./src/Containers/Auth/Signup/index.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom__ = __webpack_require__("react-router-dom");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_apollo__ = __webpack_require__("react-apollo");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_apollo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_apollo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_Graphql_Mutation__ = __webpack_require__("./src/Graphql/Mutation/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_Utils_helpers__ = __webpack_require__("./src/Utils/helpers.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_uikit__ = __webpack_require__("uikit");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_uikit___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_uikit__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__constants__ = __webpack_require__("./src/constants.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__style_css__ = __webpack_require__("./src/Containers/Auth/Signup/style.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__style_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_link__ = __webpack_require__("./src/link.ts");









class Signup extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
    constructor() {
        super(...arguments);
        this.state = {
            show: false,
            email: '',
            username: '',
            password: '',
            confirmPassword: '',
            gender: '',
            userType: '',
            firstname: '',
            lastname: '',
            everFocusedEmail: false,
            everFocusedPassword: false,
            inFocus: '',
            loading: false,
        };
        this.handleEmailChange = (evt) => {
            this.setState({ email: evt.target.value });
        };
        this.handlePasswordChange = (evt) => {
            this.setState({ password: evt.target.value });
        };
        this.handleConPasswordChange = (evt) => {
            this.setState({ confirmPassword: evt.target.value });
        };
        this.handleUsernameChange = (evt) => {
            this.setState({ username: evt.target.value });
        };
        this.handleFnameChange = (evt) => {
            this.setState({ firstname: evt.target.value });
        };
        this.handleLnameChange = (evt) => {
            this.setState({ lastname: evt.target.value });
        };
        this.handleUserTypeChange = (evt) => {
            this.setState({ userType: evt.target.value });
        };
        this.handleGenderChange = (evt) => {
            this.setState({ gender: evt.target.value });
        };
        this.handleSubmit = (evt) => {
            evt.preventDefault();
            if (!this.canBeSubmitted()) {
                return;
            }
            this.setState({ loading: true });
            const { email, password, username, firstname, lastname, gender, userType } = this.state;
            this.props
                .signup({
                variables: {
                    email,
                    password,
                    username,
                    firstname,
                    lastname,
                    userType,
                    gender,
                },
            })
                .then((result) => {
                const token = result.data.signup.token;
                __WEBPACK_IMPORTED_MODULE_8_link__["a" /* cookies */].set(__WEBPACK_IMPORTED_MODULE_6__constants__["a" /* AUTH_TOKEN */], token);
                __WEBPACK_IMPORTED_MODULE_8_link__["a" /* cookies */].set(__WEBPACK_IMPORTED_MODULE_6__constants__["b" /* CURRENT_USER */], result.data.login.user);
                this.props.refreshToken(token);
                this.setState({ loading: false });
                this.props.history.replace('/add/profile');
            })
                .catch((err) => {
                this.setState({ loading: false });
                __WEBPACK_IMPORTED_MODULE_5_uikit__["notification"](`${err.message}`, { status: 'danger', pos: 'top-right' });
            });
        };
    }
    canBeSubmitted() {
        const errors = Object(__WEBPACK_IMPORTED_MODULE_4_Utils_helpers__["c" /* validateSignup */])(this.state.email, this.state.password, this.state.username, this.state.confirmPassword, this.state.firstname, this.state.lastname, this.state.gender, this.state.userType);
        const isDisabled = Object.keys(errors).some((x) => errors[x]);
        return !isDisabled;
    }
    componentWillMount() {
        const email = this.props.location.email;
        if (email) {
            this.setState({ email });
        }
    }
    render() {
        const errors = Object(__WEBPACK_IMPORTED_MODULE_4_Utils_helpers__["c" /* validateSignup */])(this.state.email, this.state.password, this.state.username, this.state.confirmPassword, this.state.firstname, this.state.lastname, this.state.gender, this.state.userType);
        const isDisabled = Object.keys(errors).some((x) => errors[x]);
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-flex uk-flex-stretch", "data-uk-grid": true, style: { backgroundColor: '#ffffff' } },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-width-2-5 uk-visible@m sideBg uk-flex uk-flex-middle ", id: "sideBg" },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-position-relative uk-visible-toggle uk-light", "data-uk-slideshow": "animation: scale" },
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("ul", { className: "uk-slideshow-items" },
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("li", null,
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("img", { src: "https://getuikit.com/docs/images/photo.jpg", alt: "", "uk-cover": true })),
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("li", null,
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("img", { src: "https://getuikit.com/docs/images/dark.jpg", alt: "", "data-uk-cover": true })),
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("li", null,
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("img", { src: "https://getuikit.com/docs/images/light.jpg", alt: "", "data-uk-cover": true }))),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", { className: "uk-position-center-left uk-position-small uk-hidden-hover", href: "#", "data-uk-slidenav-previous": true, "data-uk-slideshow-item": "previous" }),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", { className: "uk-position-center-right uk-position-small uk-hidden-hover", href: "#", "data-uk-slidenav-next": true, "data-uk-slideshow-item": "next" }))),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-container uk-width-3-5@m uk-width-1-1@s uk-flex\n                      uk-flex-stretch uk-flex-middle uk-box-shadow-small" },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("form", { className: "uk-form-horizontal uk-width-1-1 uk-margin-large uk-padding-large uk-padding-remove-vertical", onSubmit: this.handleSubmit },
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-margin", style: { marginTop: 40 } },
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("h3", { className: "uk-heading-primary uk-align-center" }, "Signup ")),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-margin" },
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("label", { className: "uk-form-label", htmlFor: "firstname" }, "Username"),
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-form-controls" },
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("input", { id: "firstname", className: `uk-input ${errors.username ? 'uk-form-danger' : ''} `, type: "text", value: this.state.username, required: true, onChange: this.handleUsernameChange }))),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-margin" },
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("label", { className: "uk-form-label", htmlFor: "firstname" }, "Firstname"),
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-form-controls" },
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("input", { id: "firstname", className: `uk-input ${errors.firstname ? 'uk-form-danger' : ''} `, type: "text", value: this.state.firstname, required: true, onChange: this.handleFnameChange }))),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-margin" },
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("label", { className: "uk-form-label", htmlFor: "lastname" }, "Lastname"),
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-form-controls" },
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("input", { id: "lastname", className: `uk-input ${errors.lastname ? 'uk-form-danger' : ''} `, type: "text", value: this.state.lastname, required: true, onChange: this.handleLnameChange }))),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-margin" },
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("label", { className: "uk-form-label", htmlFor: "email" }, "Email"),
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-form-controls" },
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("input", { id: "email", className: `uk-input ${errors.email ? 'uk-form-danger' : ''} `, type: "email", value: this.state.email, required: true, onChange: this.handleEmailChange }))),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-margin" },
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("label", { className: "uk-form-label", htmlFor: "form-horizontal-text" }, "Password"),
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-form-controls" },
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("input", { className: `uk-input ${errors.password ? 'uk-form-danger' : ''} `, type: "password", id: "password", value: this.state.password, required: true, onChange: this.handlePasswordChange }))),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-margin" },
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("label", { className: "uk-form-label", htmlFor: "confirmPassword" }, "Confirm Password"),
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-form-controls" },
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("input", { className: `uk-input ${errors.confirmPassword ? 'uk-form-danger' : ''} `, type: "password", id: "confirmPassword", value: this.state.confirmPassword, required: true, onChange: this.handleConPasswordChange }))),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-margin" },
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("label", { className: "uk-form-label", htmlFor: "form-horizontal-text" }, "Gender"),
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-form-controls" },
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("select", { className: "uk-select", value: this.state.gender, required: true, onChange: this.handleGenderChange },
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("option", { value: "" }, "Select sex"),
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("option", { value: "Male" }, "Male"),
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("option", { value: "Female" }, "Female")))),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-margin" },
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("label", { className: "uk-form-label", htmlFor: "form-horizontal-text" }, "I am a"),
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-form-controls" },
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("select", { className: "uk-select", value: this.state.userType, required: true, onChange: this.handleUserTypeChange },
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("option", { value: "" }, "Select one"),
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("option", { value: "Student" }, "Student"),
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("option", { value: "Lecturer" }, "Lecturer")))),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-margin" }, this.state.loading ? (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { "data-uk-spinner": "ratio: 1" })) : (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("button", { className: `uk-button uk-button-primary uk-width-1-1 ${isDisabled ? 'disabled' : 'disabled'}`, type: "submit" }, "Sign Up"))),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("hr", { className: "uk-divider-icon" }),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-margin" },
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("p", { className: `uk-button uk-button-text}` }, "Already have an account?"),
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["Link"], { className: `uk-button uk-button-secondary
                 uk-align-right`, to: "/login" }, "Login now"))))));
    }
}
/* harmony default export */ __webpack_exports__["default"] = (Object(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["withRouter"])(Object(__WEBPACK_IMPORTED_MODULE_2_react_apollo__["compose"])(__WEBPACK_IMPORTED_MODULE_2_react_apollo__["withApollo"], Object(__WEBPACK_IMPORTED_MODULE_2_react_apollo__["graphql"])(__WEBPACK_IMPORTED_MODULE_3_Graphql_Mutation__["f" /* SIGNUP_USER */], {
    name: 'signup',
}))(Signup)));


/***/ }),

/***/ "./src/Containers/Auth/Signup/interest.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom__ = __webpack_require__("react-router-dom");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_apollo__ = __webpack_require__("react-apollo");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_apollo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_apollo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_stack_grid__ = __webpack_require__("react-stack-grid");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_stack_grid___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_stack_grid__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_uikit__ = __webpack_require__("uikit");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_uikit___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_uikit__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_Graphql_Query__ = __webpack_require__("./src/Graphql/Query/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_Components_InterestItem__ = __webpack_require__("./src/Components/InterestItem/index.tsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_Graphql_Mutation__ = __webpack_require__("./src/Graphql/Mutation/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__style_css__ = __webpack_require__("./src/Containers/Auth/Signup/style.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__style_css__);






// import { User } from 'CustomTypings/schema';



class InterestPage extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
    constructor() {
        super(...arguments);
        this.state = {
            show: false,
            selected: ['1'],
            loading: false,
        };
        this.onSelectAdd = (id) => {
            const temp = this.state.selected;
            const index = this.state.selected.indexOf(id);
            if (index === -1) {
                temp.push(id);
            }
            else {
                temp.splice(index, 1);
            }
            this.setState({ selected: temp });
        };
        this.onSelectRemove = (id) => {
            this.state.selected.indexOf(id);
        };
    }
    // tslint:disable-next-line:no-any
    save() {
        // tslint:disable-next-line:no-console
        console.log(this.state.selected);
        let inter = [];
        inter = this.state.selected;
        this.props.client
            .mutate({
            mutation: __WEBPACK_IMPORTED_MODULE_7_Graphql_Mutation__["a" /* ADD_INTERESTS */],
            variables: {
                interests: inter,
            },
        })
            .then((result) => {
            console.log(result);
            this.props.history.push('/signup/complete');
        })
            .catch((err) => {
            __WEBPACK_IMPORTED_MODULE_4_uikit__["notification"](`${err.message}`, { status: 'danger', pos: 'top-right' });
        });
    }
    render() {
        // tslint:disable-next-line:no-console
        console.log(this.props.interests.allInterest);
        if (this.props.interests.loading) {
            return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", null, "Loading");
        }
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-width-1-1", style: { height: '100vh', backgroundColor: '#ffffff' } },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("h1", { className: "uk-postion-top-center uk-text-center", style: { marginTop: 50 } }, "Lets pick your interest"),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("p", { className: "uk-postion-top-center uk-text-center uk-padding" }, "Select minimum of 5 interest"),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3_react_stack_grid___default.a, { columnWidth: 200 }, this.props.interests.allInterest.map((data, i) => (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_6_Components_InterestItem__["a" /* default */], { key: i, name: data.name, id: data.id, url: data.avatar, checked: this.state.selected.indexOf(data.id) === -1 ? false : true, onClickAdd: this.onSelectAdd })))),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-padding-small", style: { position: 'fixed', bottom: 0, right: 40 } },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("button", { className: "uk-button uk-button-primary", disabled: this.state.selected.length > 1 ? false : true, onClick: () => this.save() }, "SAVE INTEREST"))));
    }
}
/* harmony default export */ __webpack_exports__["default"] = (Object(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["withRouter"])(Object(__WEBPACK_IMPORTED_MODULE_2_react_apollo__["compose"])(__WEBPACK_IMPORTED_MODULE_2_react_apollo__["withApollo"], Object(__WEBPACK_IMPORTED_MODULE_2_react_apollo__["graphql"])(__WEBPACK_IMPORTED_MODULE_5_Graphql_Query__["d" /* ALL_INTEREST */], { name: 'interests' }), Object(__WEBPACK_IMPORTED_MODULE_2_react_apollo__["graphql"])(__WEBPACK_IMPORTED_MODULE_7_Graphql_Mutation__["a" /* ADD_INTERESTS */], { name: 'addInterests' }))(InterestPage)));


/***/ }),

/***/ "./src/Containers/Auth/Signup/signupProfile.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom__ = __webpack_require__("react-router-dom");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_apollo__ = __webpack_require__("react-apollo");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_apollo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_apollo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_uikit__ = __webpack_require__("uikit");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_uikit___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_uikit__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_Graphql_Query__ = __webpack_require__("./src/Graphql/Query/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_Utils_helpers__ = __webpack_require__("./src/Utils/helpers.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_avatar_image_cropper__ = __webpack_require__("react-avatar-image-cropper");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_avatar_image_cropper___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react_avatar_image_cropper__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_Graphql_Mutation__ = __webpack_require__("./src/Graphql/Mutation/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_axios__ = __webpack_require__("axios");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__style_css__ = __webpack_require__("./src/Containers/Auth/Signup/style.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__style_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_Utils_helper__ = __webpack_require__("./src/Utils/helper.ts");











class SignupProfile extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
    constructor() {
        super(...arguments);
        this.state = {
            show: false,
            country: '',
            photo: '',
            url: '',
            countryList: [],
            institution: '',
            institutionList: [],
            department: '',
            departmentList: [],
            everFocusedInstitution: false,
            everFocusedCountry: false,
            inFocus: '',
            loading: false,
            headerImage: ''
        };
        this.handleInstChange = (evt) => {
            this.setState({ institution: evt.target.value });
            this.getDepartment(evt.target.value);
        };
        this.handleDeptChange = (evt) => {
            this.setState({ department: evt.target.value });
        };
        this.handleCountryChange = (evt) => {
            this.setState({ country: evt.target.value });
            this.getInstitution(evt.target.value);
        };
        this.handleSubmit = (evt) => {
            evt.preventDefault();
            if (!this.canBeSubmitted()) {
                return;
            }
            this.setState({ loading: true });
            this.props
                .addProfile({
                variables: {
                    photoId: this.state.photo,
                    countryId: this.state.country,
                    institutionId: this.state.institution,
                    departmentId: this.state.department,
                },
            })
                .then((result) => {
                this.props.history.replace('/add/interest');
            })
                .catch((err) => {
                // Err catch block
            });
        };
        this.uploadFile = (file, dataBlob) => {
            const block = dataBlob.split(';');
            const contentType = block[0].split(':')[1];
            const realData = block[1].split(',')[1];
            // Convert it to a blob to upload
            const blob = Object(__WEBPACK_IMPORTED_MODULE_10_Utils_helper__["a" /* b64toBlob */])(realData, contentType);
            const data = new FormData();
            Object(__WEBPACK_IMPORTED_MODULE_10_Utils_helper__["c" /* urltoFile */])(dataBlob, file.name, contentType)
                .then((file) => {
                data.append('data', file);
                __WEBPACK_IMPORTED_MODULE_8_axios___default()({
                    method: 'post',
                    url: 'http://localhost:4000/upload',
                    data,
                    headers: {
                        'content-type': 'multipart/form-data'
                    }
                }).then((response) => {
                    this.setState({ photo: response.data.id, url: response.data.url });
                });
            });
        };
        this.apply = (file) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => {
                this.setState({ headerImage: reader.result });
                this.uploadFile(file, reader.result);
            };
            reader.onerror = (error) => {
                // console.log('Error: ', error);
            };
        };
    }
    canBeSubmitted() {
        const errors = Object(__WEBPACK_IMPORTED_MODULE_5_Utils_helpers__["b" /* validateProfile */])(this.state.photo, this.state.country, this.state.institution, this.state.department);
        const isDisabled = Object.keys(errors).some((x) => errors[x]);
        return !isDisabled;
    }
    getCountry() {
        this.props.client
            .query({
            query: __WEBPACK_IMPORTED_MODULE_4_Graphql_Query__["a" /* ALL_COUNTRIES */],
        })
            .then((result) => {
            // tslint:disable-next-line:no-console
            console.log(result.data.getCountry);
            this.setState({ countryList: result.data.getCountry });
        })
            .catch((err) => {
            console.log(err);
        });
    }
    getInstitution(value) {
        this.props.client
            .query({
            query: __WEBPACK_IMPORTED_MODULE_4_Graphql_Query__["c" /* ALL_INSTITUTION */],
            variables: {
                idCountry: value,
            },
        })
            .then((result) => {
            // tslint:disable-next-line:no-console
            console.log(result);
            this.setState({ institutionList: result.data.getInstitution });
        })
            .catch((err) => {
            // jkjk
        });
    }
    getDepartment(value) {
        this.props.client
            .query({
            query: __WEBPACK_IMPORTED_MODULE_4_Graphql_Query__["b" /* ALL_DEPARTMENTS */],
            variables: {
                idInstitutions: value,
            },
        })
            .then((result) => {
            this.setState({ departmentList: result.data.getDepartment });
        })
            .catch((err) => {
            // jkjk
        });
    }
    componentWillMount() {
        const email = this.props.location.email;
        if (email) {
            this.setState({ email });
        }
        this.getCountry();
    }
    /*<div className="js-upload uk-placeholder uk-text-center">
                      <span uk-icon="icon: cloud-upload" />
                      <span className="uk-text-middle">Attach photo by dropping it here or </span>
                      <div uk-form-custom="">
                          <input type="file" multiple={false} />
                          <span className="uk-link">selecting one</span>
                      </div>
                  </div>*/
    componentDidMount() {
        const bar = document.getElementById('js-progressbar');
        __WEBPACK_IMPORTED_MODULE_3_uikit__["upload"]('.js-upload', {
            url: 'https://uniserver.now.sh/upload',
            multiple: false,
            name: 'data',
            dataType: 'json',
            beforeSend() {
                // fd
            },
            beforeAll() {
                // fd
            },
            load() {
                // fd
            },
            error() {
                // tslint:disable-next-line:no-console
                console.log('error', arguments);
            },
            complete() {
                // tslint:disable-next-line:no-console
                console.log('complete', arguments);
            },
            // tslint:disable-next-line:typedef
            loadStart(e) {
                // tslint:disable-next-line:no-console
                console.log('loadStart', arguments);
                if (bar) {
                    bar.removeAttribute('hidden');
                    bar.max = e.total;
                    bar.value = e.loaded;
                }
            },
            // tslint:disable-next-line:typedef
            progress(e) {
                // tslint:disable-next-line:no-console
                console.log('progress', arguments);
                if (bar) {
                    bar.max = e.total;
                    bar.value = e.loaded;
                }
            },
            // tslint:disable-next-line:typedef
            loadEnd(e) {
                // tslint:disable-next-line:no-console
                console.log('loadEnd', arguments);
                if (bar) {
                    bar.max = e.total;
                    bar.value = e.loaded;
                }
            },
            completeAll: (result, response) => {
                // tslint:disable-next-line:no-console
                console.log('completeAll', result.response);
                const data = JSON.parse(result.response);
                this.setState({ photo: data.id, url: data.url });
                setTimeout(() => {
                    if (bar) {
                        bar.setAttribute('hidden', 'hidden');
                    }
                }, 1000);
            },
        });
    }
    render() {
        const errors = Object(__WEBPACK_IMPORTED_MODULE_5_Utils_helpers__["b" /* validateProfile */])(this.state.photo, this.state.country, this.state.institution, this.state.department);
        const isDisabled = Object.keys(errors).some((x) => errors[x]);
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-flex uk-flex-center uk-width-1-1", style: { height: '80vh', backgroundColor: '#ffffff', width: '100vw' } },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("form", { className: "uk-form-horizontal uk-width-1-2@m uk-margin-large uk-padding-large uk-padding-remove-vertical", onSubmit: this.handleSubmit },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-margin" },
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("h5", { className: "uk-heading-primary  uk-padding-large uk-padding-remove-horizontal uk-text-center", style: { fontSize: 30, fontWeight: 'bold', paddingBottom: 5 } }, "You're Almost done")),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-margin uk-flex uk-flex-center" },
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-inline", style: { backgroundColor: '#e1eaf1', width: 250, height: 250,
                            border: '0px solid black', borderRadius: 200 } },
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("img", { src: this.state.headerImage, style: { backgroundColor: '#e1eaf1', width: 250, height: 250,
                                border: '1px solid black', borderRadius: 200 } }),
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_6_react_avatar_image_cropper___default.a, { apply: this.apply, rootStyle: { width: 250, height: 250, borderRadius: 200 }, className: " uk-position-center", text: "Add header image" })),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("progress", { id: "js-progressbar", className: "uk-progress", value: "0", max: "100", hidden: true })),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-margin" },
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("select", { className: "uk-select", value: this.state.country, required: true, onChange: this.handleCountryChange },
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("option", { value: "" }, "Select country"),
                        this.state.countryList.map((country, i) => (
                        // tslint:disable-next-line:jsx-key
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("option", { key: i, value: country.id }, country.name))))),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-margin" },
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("select", { className: "uk-select", value: this.state.institution, required: true, onChange: this.handleInstChange },
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("option", { value: "" }, "Select institution"),
                        this.state.institutionList.map((institution, i) => (
                        // tslint:disable-next-line:jsx-key
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("option", { key: i, value: institution.id }, institution.title))))),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-margin" },
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("select", { className: "uk-select", value: this.state.department, required: true, onChange: this.handleDeptChange },
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("option", { value: "" }, "Select course"),
                        this.state.departmentList.map((course, i) => (
                        // tslint:disable-next-line:jsx-key
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("option", { key: i, value: course.id }, course.name))))),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-margin" }, this.state.loading ? (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { "data-uk-spinner": "ratio: 1" })) : (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("button", { className: `uk-button uk-button-primary uk-width-1-1 ${isDisabled ? 'disabled' : 'disabled'}`, disabled: isDisabled, type: "submit" }, "SAVE & NEXT"))))));
    }
}
/* harmony default export */ __webpack_exports__["default"] = (Object(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["withRouter"])(Object(__WEBPACK_IMPORTED_MODULE_2_react_apollo__["compose"])(__WEBPACK_IMPORTED_MODULE_2_react_apollo__["withApollo"], Object(__WEBPACK_IMPORTED_MODULE_2_react_apollo__["graphql"])(__WEBPACK_IMPORTED_MODULE_4_Graphql_Query__["a" /* ALL_COUNTRIES */], { name: 'country' }), Object(__WEBPACK_IMPORTED_MODULE_2_react_apollo__["graphql"])(__WEBPACK_IMPORTED_MODULE_7_Graphql_Mutation__["b" /* ADD_PROFILE */], { name: 'addProfile' }), Object(__WEBPACK_IMPORTED_MODULE_2_react_apollo__["graphql"])(__WEBPACK_IMPORTED_MODULE_7_Graphql_Mutation__["b" /* ADD_PROFILE */], {
    name: 'addProfile',
}))(SignupProfile)));


/***/ }),

/***/ "./src/Containers/Auth/Signup/style.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(undefined);
// imports


// module
exports.push([module.i, "#sideBg {\n  background: url(" + __webpack_require__("./src/Assets/bg8.svg") + "), url(" + __webpack_require__("./src/Assets/bg4.svg") + "), url(" + __webpack_require__("./src/Assets/bg2.svg") + ") 40px;\n  background-position: right bottom, right top, bottom right;\n  background-repeat: no-repeat, no-repeat, repeat-x;\n  background-size: auto, auto, 60%; }\n\n.sideBg {\n  background: url(" + __webpack_require__("./src/Assets/bg8.svg") + "), url(" + __webpack_require__("./src/Assets/bg4.svg") + "), url(" + __webpack_require__("./src/Assets/bg2.svg") + ") 40px;\n  background-position: right bottom, right top, bottom right;\n  background-repeat: no-repeat, no-repeat, repeat-x;\n  background-size: auto, auto, 60%; }\n", ""]);

// exports


/***/ }),

/***/ "./src/Containers/ChatDetail/index.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom__ = __webpack_require__("react-router-dom");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_helmet__ = __webpack_require__("react-helmet");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_helmet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_helmet__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_anchor_ui_message_list__ = __webpack_require__("anchor-ui/message-list");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_anchor_ui_message_list___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_anchor_ui_message_list__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_anchor_ui_message_input__ = __webpack_require__("anchor-ui/message-input");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_anchor_ui_message_input___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_anchor_ui_message_input__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_anchor_ui_message__ = __webpack_require__("anchor-ui/message");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_anchor_ui_message___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_anchor_ui_message__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_anchor_ui_button__ = __webpack_require__("anchor-ui/button");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_anchor_ui_button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_anchor_ui_button__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_anchor_ui_icons_icon_emoji__ = __webpack_require__("anchor-ui/icons/icon-emoji");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_anchor_ui_icons_icon_emoji___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_anchor_ui_icons_icon_emoji__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_anchor_ui_emoji_menu__ = __webpack_require__("anchor-ui/emoji-menu");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_anchor_ui_emoji_menu___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_anchor_ui_emoji_menu__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_react_apollo__ = __webpack_require__("react-apollo");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_react_apollo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_react_apollo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_Graphql_Mutation__ = __webpack_require__("./src/Graphql/Mutation/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_Graphql_Query__ = __webpack_require__("./src/Graphql/Query/index.ts");












class ChatDetail extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
    constructor() {
        super(...arguments);
        this.state = {
            channelId: '',
            text: '',
            open: false,
            emoji: '',
            currentChannel: {}
        };
        this.toggleMenu = () => this.setState({ open: !this.state.open });
        this.sendEmoji = (emoj) => {
            const tempStr = this.state.emoji + emoj.shortname;
            this.setState({ emoji: tempStr });
        };
        this.handleChange = (evt) => {
            this.setState({ emoji: evt.target.value });
        };
        // This is called by both enter and click
        this.handleSendMessage = () => {
            // Assuming there is a function/prop which actually sends the message
            // const { sendMessage } = this.props;
            // Grab input value from state. This is set by handleChange
            // const { emoji } = this.state;
            // sendMessage(value);
        };
        this.sendMessage = () => {
            const channelId = this.state.channelId;
            const text = this.state.text;
            this.props.sendMessage({
                variables: {
                    channelId,
                    text
                }
            }).then((result) => {
                // hjh
            });
        };
    }
    getAllMessageForChanne() {
        this.props.client.query({
            query: __WEBPACK_IMPORTED_MODULE_11_Graphql_Query__["h" /* GET_MESSAGES */],
            variables: {
                channelId: this.props.channelId
            }
        }).then((result) => {
            // ghghg
        });
    }
    render() {
        const { open, emoji } = this.state;
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_0_react__["Fragment"], null,
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_react_helmet__["Helmet"], null,
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("title", null, "Unizonn | Chat"),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("meta", { name: "an inclusive community", content: "Unizonn community" })),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-width-1-1" },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3_anchor_ui_message_list___default.a, { style: { height: '77vh', flex: 1, backgroundColor: 'aliceblue' } },
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_5_anchor_ui_message___default.a, { body: "Helloo man i am a very cold guy frome time to time :cowboy:", type: "text", enableMultiline: true, emoji: true, username: 'juicycleff', createdAt: '12/29/2018', enableLightbox: true, enableLinks: true, myMessage: true, 
                        // tslint:disable-next-line:max-line-length
                        avatar: "data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4Ij4KPGNpcmNsZSBzdHlsZT0iZmlsbDojNzFFMkVGOyIgY3g9IjI1NiIgY3k9IjI1NiIgcj0iMjU2Ii8+CjxwYXRoIHN0eWxlPSJmaWxsOiMzOEM2RDk7IiBkPSJNMjI1LjcyNiw0MzkuNTQ2bDY5LjQ2OCw2OS40NjhDNDE3Ljk3NSw0OTAuMTUxLDUxMiwzODQuMDU3LDUxMiwyNTYgIGMwLTAuNjgxLTAuMDIxLTEuMzU4LTAuMDI2LTIuMDM4TDM1OC44NiwxMDAuODQ4TDIyNS43MjYsNDM5LjU0NnoiLz4KPHJlY3QgeD0iMjEzLjMzMyIgeT0iMjkyLjIxOSIgc3R5bGU9ImZpbGw6I0ZDRDA4ODsiIHdpZHRoPSI4NS4zMzMiIGhlaWdodD0iODUuMzMzIi8+CjxyZWN0IHg9IjI1Ni4yOTMiIHk9IjI5Mi4yMTkiIHN0eWxlPSJmaWxsOiNEREFCNjI7IiB3aWR0aD0iNDIuMzc5IiBoZWlnaHQ9Ijg1LjMzMyIvPgo8cGF0aCBzdHlsZT0iZmlsbDojRDlFREVDOyIgZD0iTTM1Ny43NjQsMzYwLjVsLTQ1LjIyLTkuMDQ0bC03Ljk5Mi0xMS42NjZjLTEuNDk2LTIuMTg0LTQuMzI3LTMuMDA3LTYuNzU5LTEuOTY1TDI1NiwzNTUuODMgIGwtNDEuNTQzLTE3Ljk4N2MtMi40MTUtMS4wNTMtNS4yMzktMC4yNjItNi43NTQsMS44OTNsLTguMjQ3LDExLjcxOWwtNDUuMjIsOS4wNDRjLTIzLjAyNCw0LjYwNi0zOS41OTYsMjQuODIxLTM5LjU5Niw0OC4zdjYwLjY0NyAgQzE1NS4xNDgsNDk2LjMyOCwyMDMuNzQsNTEyLDI1Niw1MTJzMTAwLjg1Mi0xNS42NzIsMTQxLjM2LTQyLjU1NXYtNjAuNjQ3QzM5Ny4zNiwzODUuMzE5LDM4MC43ODcsMzY1LjEwNCwzNTcuNzY0LDM2MC41eiIvPgo8cGF0aCBzdHlsZT0iZmlsbDojQzdEOEQ3OyIgZD0iTTM5Ny4zNiw0MDguNzk4YzAtMjMuNDgtMTYuNTc0LTQzLjY5Ni0zOS41OTYtNDguM2wtNDUuMjItOS4wNDRsLTcuOTkyLTExLjY2NiAgYy0xLjQ5Ni0yLjE4NC00LjMyNy0zLjAwNy02Ljc1OS0xLjk2NWwtNDEuNTAzLDE3Ljg4djE1Ni4yODljNTIuMTQ4LTAuMDU3LDEwMC42MzgtMTUuNzE3LDE0MS4wNzItNDIuNTQ5di02MC42NDVIMzk3LjM2eiIvPgo8cGF0aCBzdHlsZT0iZmlsbDojRkZFREI1OyIgZD0iTTM0Ny41MzEsMjA1LjQ0YzAuNDU5LTQuMjQ0LDAuNjk4LTguNDI4LDAuNjk4LTEyLjUwOWMwLTUzLjk3NC00MS4yOTMtOTcuNzI4LTkyLjIyOS05Ny43MjggIHMtOTIuMjI5LDQzLjc1My05Mi4yMjksOTcuNzI4YzAsNC4wOCwwLjI0LDguMjY0LDAuNjk4LDEyLjUwOWMtOC45NDUsMi4zMjYtMTMuMjAyLDE2LjA4Ny05LjUwNiwzMC44MTcgIGMzLjcwOCwxNC43NzYsMTQuMDE0LDI0LjkyMSwyMy4wMTgsMjIuNjYxYzAuODIxLTAuMjA1LDEuNTg2LTAuNTM4LDIuMzI2LTAuOTI3YzE2LjY2NywzMy40NTIsNDQuMzUxLDYwLjU5NCw3NS42OTMsNjAuNTk0ICBzNTkuMDI3LTI3LjEzOSw3NS42OTMtNjAuNTk0YzAuNzQsMC4zOSwxLjUwNSwwLjcyMiwyLjMyNiwwLjkyN2M5LjAwNCwyLjI2LDE5LjMwOS03Ljg4NSwyMy4wMTgtMjIuNjYxICBDMzYwLjczMiwyMjEuNTI3LDM1Ni40NzYsMjA3Ljc2MywzNDcuNTMxLDIwNS40NHoiLz4KPHBhdGggc3R5bGU9ImZpbGw6I0U4Q0Y4OTsiIGQ9Ik0zNDcuNTMxLDIwNS40NGMwLjQ1OS00LjI0NCwwLjY5OC04LjQyOCwwLjY5OC0xMi41MDljMC01My44NzItNDEuMTM4LTk3LjU1Ni05MS45NDEtOTcuNzIxdjIyMy4zNjUgIGMzMS4yMjMtMC4xNjcsNTguNzktMjcuMjM2LDc1LjQwNS02MC41ODVjMC43NCwwLjM5LDEuNTA1LDAuNzIyLDIuMzI2LDAuOTI3YzkuMDA0LDIuMjYsMTkuMzA5LTcuODg1LDIzLjAxOC0yMi42NjEgIEMzNjAuNzMyLDIyMS41MjcsMzU2LjQ3NiwyMDcuNzYzLDM0Ny41MzEsMjA1LjQ0eiIvPgo8cGF0aCBzdHlsZT0iZmlsbDojNDk0OTQ4OyIgZD0iTTIwNC4xNCwxNzAuNjY3YzAsMCw0MC4wODEsMzguMzU3LDEyMS45NjYsMjQuNTY2YzAsMCw3Ljk0LTEuOTk4LDIxLjQyNSwxMC4yMDcgIGMwLDAsMjQuNjkxLTUxLjU4MSwxMS4zMzEtMTA0LjU5MWMwLDAtNDMuNTI5LDUuNjAzLTYyLjkyMy02LjQ2NWMtMTkuMzk0LTEyLjA2Ny03MS4xMTEtMjQuOTk3LTgyLjc0NywxMS4yMDUgIGMwLDAtMzcuNDk1LTQuNzQxLTQ3LjgzOCwzNC4wNDdjLTEwLjM0MywzOC43ODgtMC44ODMsNjUuODAzLTAuODgzLDY1LjgwM1MxODMuODg0LDE1OC41OTksMjA0LjE0LDE3MC42Njd6Ii8+CjxnPgoJPHBhdGggc3R5bGU9ImZpbGw6IzMzMzMzMzsiIGQ9Ik0zNTguODYsMTAwLjg0OGMwLDAtNDMuNTI5LDUuNjAzLTYyLjkyMy02LjQ2NWMtOC44MDktNS40ODItMjQuMjg4LTExLjEyNC0zOS42NS0xMi4yNzZ2MTEyLjUwOSAgIGMxOC4zNTgsMy45MjcsNDEuNjA1LDUuMzY4LDY5LjgxOCwwLjYxNWMwLDAsNy45NC0xLjk5OCwyMS40MjUsMTAuMjA3QzM0Ny41MzEsMjA1LjQ0LDM3Mi4yMjEsMTUzLjg1OSwzNTguODYsMTAwLjg0OHoiLz4KCTxwYXRoIHN0eWxlPSJmaWxsOiMzMzMzMzM7IiBkPSJNMjY3LjkxLDUxMS42OTdjMzAuNDg0LTEuMzk4LDU5LjU2NC04LjEzNSw4Ni4zNTQtMTkuMjg3VjM1OS44bC0zNC45MDctNi45ODJMMjY3LjkxLDUxMS42OTd6Ii8+CjwvZz4KPGc+Cgk8cGF0aCBzdHlsZT0iZmlsbDojNDk0OTQ4OyIgZD0iTTI0NC4wOSw1MTEuNjk3Yy0zMC40ODQtMS4zOTgtNTkuNTY0LTguMTM1LTg2LjM1NC0xOS4yODdWMzU5LjhsMzQuOTA3LTYuOTgyTDI0NC4wOSw1MTEuNjk3eiIvPgoJPHBhdGggc3R5bGU9ImZpbGw6IzQ5NDk0ODsiIGQ9Ik0yOTAuMjQ1LDM1NS45MjRsLTI0LjA2MSw4LjgxNGMtMC4zOTgtMS4yNDUtMS41NTItMi4xNTEtMi45MjktMi4xNTFoLTEzLjY0OCAgIGMtMS4zNywwLTIuNTIsMC45LTIuOTI0LDIuMTM2bC0yNC4wMTctOC43OTljLTQuMTYtMS41MjQtOC41NjYsMS41NTUtOC41NjYsNS45ODV2MzAuMzk2YzAsNC40MjksNC40MDYsNy41MDksOC41NjYsNS45ODUgICBsMjQuMDE3LTguNzk5YzAuNDAzLDEuMjM2LDEuNTUyLDIuMTM2LDIuOTI0LDIuMTM2aDEzLjY0OGMxLjM3NywwLDIuNTI5LTAuOTA3LDIuOTI5LTIuMTUxbDI0LjA2MSw4LjgxNCAgIGM0LjE2LDEuNTI0LDguNTY2LTEuNTU1LDguNTY2LTUuOTg1VjM2MS45MUMyOTguODExLDM1Ny40NzksMjk0LjQwNSwzNTQuNDAxLDI5MC4yNDUsMzU1LjkyNHoiLz4KPC9nPgo8cGF0aCBzdHlsZT0iZmlsbDojMzMzMzMzOyIgZD0iTTI5MC4yNDUsMzU1LjkyNGwtMjQuMDYxLDguODE0Yy0wLjM5OC0xLjI0NS0xLjU1Mi0yLjE1MS0yLjkyOS0yLjE1MWgtNi45Njh2MjkuMDQxaDYuOTY4ICBjMS4zNzcsMCwyLjUyOS0wLjkwNywyLjkyOS0yLjE1MWwyNC4wNjEsOC44MTRjNC4xNiwxLjUyNCw4LjU2Ni0xLjU1NSw4LjU2Ni01Ljk4NVYzNjEuOTEgIEMyOTguODExLDM1Ny40NzksMjk0LjQwNSwzNTQuNDAxLDI5MC4yNDUsMzU1LjkyNHoiLz4KPGc+Cgk8Y2lyY2xlIHN0eWxlPSJmaWxsOiNBREFEQUQ7IiBjeD0iMjU2IiBjeT0iNDEwLjI5IiByPSI0LjMxIi8+Cgk8Y2lyY2xlIHN0eWxlPSJmaWxsOiNBREFEQUQ7IiBjeD0iMjU2IiBjeT0iNDMzLjEzMSIgcj0iNC4zMSIvPgoJPGNpcmNsZSBzdHlsZT0iZmlsbDojQURBREFEOyIgY3g9IjI1NiIgY3k9IjQ1NS45NzMiIHI9IjQuMzEiLz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K" }),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_5_anchor_ui_message___default.a, { body: "Helloo man" }),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_5_anchor_ui_message___default.a, { body: "Helloo man" }),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_5_anchor_ui_message___default.a, { body: "Helloo man" }),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_5_anchor_ui_message___default.a, { body: "Helloo man" }),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_5_anchor_ui_message___default.a, { body: "Helloo man" }),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_5_anchor_ui_message___default.a, { body: "Helloo man" }),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_5_anchor_ui_message___default.a, { body: "Helloo man" }),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_5_anchor_ui_message___default.a, { body: "Helloo man" })),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "input-box uk-width-auto" },
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4_anchor_ui_message_input___default.a, { placeholder: "Enter message", multiLine: true, style: { margin: 0 }, value: emoji, sendMessage: this.handleSendMessage, onChange: (event) => this.handleChange(event), leftButton: __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_6_anchor_ui_button___default.a
                        // tslint:disable-next-line:jsx-boolean-value
                        , { 
                            // tslint:disable-next-line:jsx-boolean-value
                            iconButton: true, onClick: this.toggleMenu },
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_7_anchor_ui_icons_icon_emoji___default.a, null)) }),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("section", null,
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_8_anchor_ui_emoji_menu___default.a, { sendEmoji: (event, emoj) => this.sendEmoji(emoj), open: open, hideMenu: this.toggleMenu }))))));
    }
}
/* harmony default export */ __webpack_exports__["default"] = (Object(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["withRouter"])(Object(__WEBPACK_IMPORTED_MODULE_9_react_apollo__["compose"])(__WEBPACK_IMPORTED_MODULE_9_react_apollo__["withApollo"], Object(__WEBPACK_IMPORTED_MODULE_9_react_apollo__["graphql"])(__WEBPACK_IMPORTED_MODULE_11_Graphql_Query__["h" /* GET_MESSAGES */], { name: 'getMessages',
    props({ data, ownProps: Props, mutate }) {
        // ghg
    },
    options: {
        variables: {}
    }
}), Object(__WEBPACK_IMPORTED_MODULE_9_react_apollo__["graphql"])(__WEBPACK_IMPORTED_MODULE_10_Graphql_Mutation__["d" /* CREATE_MESSAGE */], { name: 'sendMessage' }))(ChatDetail)));
/*
/** Path to the user's profile image will only be rendered if provided *
avatar: _propTypes2.default.string,
/** The message's body text *
body: _propTypes2.default.node.isRequired,
/** Time when the message was created *
createdAt: _propTypes2.default.node.isRequired,
/** The sender's username *
username: _propTypes2.default.node.isRequired,
/** The message's type *
type: _propTypes2.default.oneOf(['text', 'image', 'sticker', 'giphy']),
/** Override the styles of the root element *
style: _propTypes2.default.object, // eslint-disable-line react/forbid-prop-types
/** Override the styles of the header element *
messageHeaderStyle: _propTypes2.default.object, // eslint-disable-line react/forbid-prop-types
/** Override the styles of the body element *
messageBodyStyle: _propTypes2.default.object, // eslint-disable-line react/forbid-prop-types
/** Override the styles of the time element *
messageTimeStyle: _propTypes2.default.object, // eslint-disable-line react/forbid-prop-types
/** The message size. One of the following: ["small", "medium", "large"] *
fontSize: _propTypes2.default.oneOf(['small', 'medium', 'large']),
/** Flag used to change message styles. True if the message was sent by the current user *
myMessage: _propTypes2.default.bool,
/** Enable emojione for messages *
emoji: _propTypes2.default.bool,
/** Enables links in messages *
enableLinks: _propTypes2.default.bool,
/** Enables compact messages *
compact: _propTypes2.default.bool,
/** Enables Lighbox for image messages *
enableLightbox: _propTypes2.default.bool,
/** Collapse an image message *
collapsed: _propTypes2.default.bool,
/** Text to display for collapsed messages *
collapsedText: _propTypes2.default.node,
/** Text to display above giphy messages *
giphyDescription: _propTypes2.default.node,
/** Text to display for edited banner *
edited: _propTypes2.default.node,
/** Show a separator above the message *
separator: _propTypes2.default.node,
/**
 * Highlight text, must be an array of objects containing id, value, and prefix.
 *
 * Text matching '[prefix][value]' will be highlighted
 *
highlights: _propTypes2.default.arrayOf(String),
**
 * Callback fired when highlighted text is clicked
 *
 * function(event: object, highlight: object) => void
 *
onHighlightClick: _propTypes2.default.func,
** Badge to display next to username *
badge: _propTypes2.default.node,
/** Render an IconMenu in Message *
iconMenu: _propTypes2.default.node,
/** Enables multiline messages *
enableMultiline: _propTypes2.default.bool,
/** Image placeholder url *
imagePlaceholder: _propTypes2.default.string,
/** Image error url *
imageError: _propTypes2.default.string,
onImageLoad: _propTypes2.default.func,
**
 * Callback fired when an image or giphy throws an error while loading
 *
 * function(event: object) => void
 *
onImageError: _propTypes2.default.func,
color: _propTypes2.default.string.isRequired
*/ 


/***/ }),

/***/ "./src/Containers/ComposeArticle/index.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_select_plus__ = __webpack_require__("react-select-plus");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_select_plus___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_select_plus__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_Graphql_Query__ = __webpack_require__("./src/Graphql/Query/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_router_dom__ = __webpack_require__("react-router-dom");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_router_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_apollo__ = __webpack_require__("react-apollo");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_apollo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_apollo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_avatar_image_cropper__ = __webpack_require__("react-avatar-image-cropper");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_avatar_image_cropper___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_avatar_image_cropper__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_medium_draft__ = __webpack_require__("medium-draft");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_medium_draft___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_medium_draft__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_idle_timer__ = __webpack_require__("react-idle-timer");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_idle_timer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react_idle_timer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_medium_draft_lib_importer__ = __webpack_require__("medium-draft/lib/importer");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_medium_draft_lib_importer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_medium_draft_lib_importer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_draft_js__ = __webpack_require__("draft-js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_draft_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_draft_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_medium_draft_lib_exporter__ = __webpack_require__("medium-draft/lib/exporter");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_medium_draft_lib_exporter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_medium_draft_lib_exporter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_axios__ = __webpack_require__("axios");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_react_select_plus_dist_react_select_plus_css__ = __webpack_require__("./node_modules/react-select-plus/dist/react-select-plus.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_react_select_plus_dist_react_select_plus_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_react_select_plus_dist_react_select_plus_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_medium_draft_lib_index_css__ = __webpack_require__("./node_modules/medium-draft/lib/index.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_medium_draft_lib_index_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_medium_draft_lib_index_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__style_css__ = __webpack_require__("./src/Containers/ComposeArticle/style.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14__style_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_Graphql_Mutation__ = __webpack_require__("./src/Graphql/Mutation/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_Utils_helper__ = __webpack_require__("./src/Utils/helper.ts");

// import Editor from 'Components/Editor';




// import { Helmet } from 'react-helmet';












class ComposeWrite extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
    constructor() {
        super(...arguments);
        this.state = {
            title: '',
            body: null,
            category: [],
            removeSelected: true,
            value: [],
            tags: [],
            headerImage: '',
            photoId: '',
            articleId: '',
            // tslint:disable-next-line:no-object-literal-type-assertion
            article: {},
            editorState: Object(__WEBPACK_IMPORTED_MODULE_6_medium_draft__["createEditorState"])()
        };
        this.handleChange = (value) => {
            this.setState({ value });
            // console.log(`Selected: ${selectedOption.label}`);
        };
        this.handleChangeBody = (value) => {
            this.setState({ value });
            // console.log(`Selected: ${selectedOption.label}`);
        };
        this.autoSave = () => {
            // console.log(`Selected: ${selectedOption.label}`);
        };
        this.publish = () => {
            // console.log(`Selected: ${selectedOption.label}`);
        };
        this.uploadFile = (file, dataBlob) => {
            const block = dataBlob.split(';');
            const contentType = block[0].split(':')[1];
            const realData = block[1].split(',')[1];
            // Convert it to a blob to upload
            const blob = Object(__WEBPACK_IMPORTED_MODULE_16_Utils_helper__["a" /* b64toBlob */])(realData, contentType);
            const data = new FormData();
            Object(__WEBPACK_IMPORTED_MODULE_16_Utils_helper__["c" /* urltoFile */])(dataBlob, file.name, contentType)
                .then((file) => {
                data.append('data', file);
                __WEBPACK_IMPORTED_MODULE_11_axios___default()({
                    method: 'post',
                    url: 'http://localhost:4000/upload',
                    data,
                    headers: {
                        'content-type': 'multipart/form-data'
                    }
                }).then((response) => {
                    this.setState({ photoId: response.data.id, headerImage: response.data.url });
                });
            });
        };
        this.apply = (file) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => {
                this.uploadFile(file, reader.result);
            };
            reader.onerror = (error) => {
                // console.log('Error: ', error);
            };
        };
        this.onChangeBody = (editorState) => {
            this.setState({ editorState });
            console.log(editorState);
        };
        this.onChangetitle = (e) => {
            this.setState({ title: e.target.value });
        };
        this.save = () => {
            const { editorState, title, category, tags, article, photoId } = this.state;
            if (editorState !== null || title.length > 0 || category.length > 0 || tags.length > 0) {
                const id = article.id;
                const edi = this.state.editorState;
                const renderedHTML = __WEBPACK_IMPORTED_MODULE_10_medium_draft_lib_exporter___default()(edi.getCurrentContent());
                this.props.client.mutate({
                    mutation: __WEBPACK_IMPORTED_MODULE_15_Graphql_Mutation__["c" /* CREATE_ARTICLE */],
                    variables: {
                        id,
                        title,
                        body: renderedHTML,
                        tags,
                        category,
                        photoId
                    }
                }).then((result) => {
                    this.setState({ article: result.data.createArticle });
                    console.log(result);
                }).catch((err) => {
                    console.log(err);
                });
            }
        };
    }
    addInterestContent() {
        this
            .props
            .client
            .query({ query: __WEBPACK_IMPORTED_MODULE_2_Graphql_Query__["d" /* ALL_INTEREST */] })
            .then((result) => {
            // tslint:disable-next-line:no-any
            const tempList = [];
            result
                .data
                .allInterest
                .map((interest) => {
                const temp = {
                    value: interest.id,
                    label: interest.name
                };
                tempList.push(temp);
            });
            // tslint:disable-next-line:no-console
            console.log(result);
            this.setState({ category: tempList });
        });
    }
    componentWillMount() {
        this.addInterestContent();
        const { match: { params } } = this.props;
        // tslint:disable-next-line:no-console
        console.log(params);
        if (params.id) {
            this.fetchArticle(params.id);
        }
        else {
            // this.props.history.goBack();
        }
    }
    // tslint:disable-next-line:typedef
    componentDidUpdate(prevProps) {
        // tslint:disable-next-line:no-console
        console.log(prevProps);
        const oldId = prevProps.match.params.id;
        const newId = this.props.match.params.id;
        // tslint:disable-next-line:no-console
        console.log(oldId);
        if (newId !== oldId) {
            this.fetchArticle(oldId);
        }
    }
    fetchArticle(id) {
        this.props.client.query({
            query: __WEBPACK_IMPORTED_MODULE_2_Graphql_Query__["g" /* GET_ARTICLE_BY_ID */],
            variables: {
                id
            }
        }).then((result) => {
            const editorState = Object(__WEBPACK_IMPORTED_MODULE_6_medium_draft__["createEditorState"])(Object(__WEBPACK_IMPORTED_MODULE_9_draft_js__["convertToRaw"])(__WEBPACK_IMPORTED_MODULE_8_medium_draft_lib_importer___default()(result.data.getArticleById.body)));
            this.setState({
                article: result.data.getArticleById,
                title: result.data.getArticleById.title,
                category: result.data.getArticleById.category,
                editorState,
            });
            console.log('hey man im lonely');
            console.log(result.data.getArticleById.headerImage);
            if (result.data.getArticleById.headerImage) {
                this.setState({
                    photoId: result.data.getArticleById.headerImage.id,
                    headerImage: result.data.getArticleById.headerImage.url
                });
            }
        }).catch((err) => {
            console.log(err);
        });
    }
    render() {
        const { value, category, title, editorState } = this.state;
        console.log(title);
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_7_react_idle_timer___default.a, { ref: (ref) => this.timers = ref, element: document, idleAction: this.save, timeout: 3000 },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-width-1-1" },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-width-1-1 mdc-elevation--z1 uk-flex uk-flex-between", style: {
                        backgroundColor: '#454d5d',
                        padding: 4
                    } },
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-flex-around" },
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("button", { className: "uk-button uk-button-small uk-button-secondary", type: "button", onClick: () => this.props.history.goBack() }, "Back")),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-flex-around" },
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("button", { className: "uk-button uk-light uk-button-small uk-button-default uk-width-1-2", type: "button" }, "Drafts"),
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("button", { className: "uk-button uk-button-small uk-button-primary uk-width-1-2", type: "button" }, "Publish"))),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("ul", { "uk-accordion": "multiple: true" },
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("li", { className: "uk-open" },
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", { className: "uk-accordion-title", href: "#" }, "Image"),
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-accordion-content" },
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-width-1-1 uk-inline", style: {
                                    backgroundColor: '#e1eaf1',
                                    minHeight: 250,
                                    height: 350,
                                    maxHeight: 350
                                } },
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("img", { src: this.state.headerImage, height: 350, className: "uk-width-1-1" }),
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_5_react_avatar_image_cropper___default.a, { apply: this.apply, className: "uk-width-1-1 float-center uk-overlay uk-position-center", text: "Add header image" }))))),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-width-1-1 uk-padding-large mdc-card mdc-elevation--z5 uk-padding-remove-vertical" },
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-width-1-1 uk-padding-large uk-margin-top uk-padding-remove-vertical" },
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-width-1-1 uk-padding-large uk-margin-top uk-padding-remove-vertical" }, !this.props.allInterest.loading
                            ? (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_select_plus___default.a, { name: "form-field-name", value: value, onChange: this.handleChange, placeholder: "Add categories or interest", multi: true, closeOnSelect: true, style: {
                                    borderWidth: 0
                                }, removeSelected: this.state.removeSelected, simpleValue: false, options: category }))
                            : null)),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-width-1-1 uk-padding-large uk-padding-remove-vertical uk-margin-top" },
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-width-1-1 uk-padding-large uk-padding-remove-vertical" },
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("textarea", { rows: 2, className: "uk-article-title uk-width-1-1", style: { borderWidth: 0, fontWeight: 'bolder' }, placeholder: "Title of article", value: title, onChange: this.onChangetitle }))),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-width-1-1 uk-padding-large uk-padding-remove-vertical", style: {
                            minHeight: '40vh'
                        } },
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-width-1-1 uk-padding-large uk-padding-remove-vertical" },
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_6_medium_draft__["Editor"], { ref: (ref) => this.editor = ref, editorState: editorState, onChange: this.onChangeBody })))))));
    }
}
/* harmony default export */ __webpack_exports__["default"] = (Object(__WEBPACK_IMPORTED_MODULE_3_react_router_dom__["withRouter"])(Object(__WEBPACK_IMPORTED_MODULE_4_react_apollo__["compose"])(__WEBPACK_IMPORTED_MODULE_4_react_apollo__["withApollo"], Object(__WEBPACK_IMPORTED_MODULE_4_react_apollo__["graphql"])(__WEBPACK_IMPORTED_MODULE_2_Graphql_Query__["d" /* ALL_INTEREST */], { name: 'allInterest' }))(ComposeWrite)));


/***/ }),

/***/ "./src/Containers/ComposeArticle/style.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(undefined);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),

/***/ "./src/Containers/Connection/index.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__ = __webpack_require__("semantic-ui-react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_semantic_ui_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__);


class Connection extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
    constructor() {
        super(...arguments);
        this.state = {
            messages: [],
            is_typing: false
        };
    }
    render() {
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-flex uk-width-1-1 uk-height-1-1 uk-height-match" },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-width-4-4 uk-card uk-padding-small" },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "ui cards uk-flex-center" },
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "ui card" },
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "middle aligned content uk-text-center" },
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", { className: "ui tiny image cirlce center aligned", href: "#" },
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("img", { className: "circle", 
                                    // tslint:disable-next-line:max-line-length
                                    src: "data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4Ij4KPGNpcmNsZSBzdHlsZT0iZmlsbDojNzFFMkVGOyIgY3g9IjI1NiIgY3k9IjI1NiIgcj0iMjU2Ii8+CjxwYXRoIHN0eWxlPSJmaWxsOiMzOEM2RDk7IiBkPSJNMjI1LjcyNiw0MzkuNTQ2bDY5LjQ2OCw2OS40NjhDNDE3Ljk3NSw0OTAuMTUxLDUxMiwzODQuMDU3LDUxMiwyNTYgIGMwLTAuNjgxLTAuMDIxLTEuMzU4LTAuMDI2LTIuMDM4TDM1OC44NiwxMDAuODQ4TDIyNS43MjYsNDM5LjU0NnoiLz4KPHJlY3QgeD0iMjEzLjMzMyIgeT0iMjkyLjIxOSIgc3R5bGU9ImZpbGw6I0ZDRDA4ODsiIHdpZHRoPSI4NS4zMzMiIGhlaWdodD0iODUuMzMzIi8+CjxyZWN0IHg9IjI1Ni4yOTMiIHk9IjI5Mi4yMTkiIHN0eWxlPSJmaWxsOiNEREFCNjI7IiB3aWR0aD0iNDIuMzc5IiBoZWlnaHQ9Ijg1LjMzMyIvPgo8cGF0aCBzdHlsZT0iZmlsbDojRDlFREVDOyIgZD0iTTM1Ny43NjQsMzYwLjVsLTQ1LjIyLTkuMDQ0bC03Ljk5Mi0xMS42NjZjLTEuNDk2LTIuMTg0LTQuMzI3LTMuMDA3LTYuNzU5LTEuOTY1TDI1NiwzNTUuODMgIGwtNDEuNTQzLTE3Ljk4N2MtMi40MTUtMS4wNTMtNS4yMzktMC4yNjItNi43NTQsMS44OTNsLTguMjQ3LDExLjcxOWwtNDUuMjIsOS4wNDRjLTIzLjAyNCw0LjYwNi0zOS41OTYsMjQuODIxLTM5LjU5Niw0OC4zdjYwLjY0NyAgQzE1NS4xNDgsNDk2LjMyOCwyMDMuNzQsNTEyLDI1Niw1MTJzMTAwLjg1Mi0xNS42NzIsMTQxLjM2LTQyLjU1NXYtNjAuNjQ3QzM5Ny4zNiwzODUuMzE5LDM4MC43ODcsMzY1LjEwNCwzNTcuNzY0LDM2MC41eiIvPgo8cGF0aCBzdHlsZT0iZmlsbDojQzdEOEQ3OyIgZD0iTTM5Ny4zNiw0MDguNzk4YzAtMjMuNDgtMTYuNTc0LTQzLjY5Ni0zOS41OTYtNDguM2wtNDUuMjItOS4wNDRsLTcuOTkyLTExLjY2NiAgYy0xLjQ5Ni0yLjE4NC00LjMyNy0zLjAwNy02Ljc1OS0xLjk2NWwtNDEuNTAzLDE3Ljg4djE1Ni4yODljNTIuMTQ4LTAuMDU3LDEwMC42MzgtMTUuNzE3LDE0MS4wNzItNDIuNTQ5di02MC42NDVIMzk3LjM2eiIvPgo8cGF0aCBzdHlsZT0iZmlsbDojRkZFREI1OyIgZD0iTTM0Ny41MzEsMjA1LjQ0YzAuNDU5LTQuMjQ0LDAuNjk4LTguNDI4LDAuNjk4LTEyLjUwOWMwLTUzLjk3NC00MS4yOTMtOTcuNzI4LTkyLjIyOS05Ny43MjggIHMtOTIuMjI5LDQzLjc1My05Mi4yMjksOTcuNzI4YzAsNC4wOCwwLjI0LDguMjY0LDAuNjk4LDEyLjUwOWMtOC45NDUsMi4zMjYtMTMuMjAyLDE2LjA4Ny05LjUwNiwzMC44MTcgIGMzLjcwOCwxNC43NzYsMTQuMDE0LDI0LjkyMSwyMy4wMTgsMjIuNjYxYzAuODIxLTAuMjA1LDEuNTg2LTAuNTM4LDIuMzI2LTAuOTI3YzE2LjY2NywzMy40NTIsNDQuMzUxLDYwLjU5NCw3NS42OTMsNjAuNTk0ICBzNTkuMDI3LTI3LjEzOSw3NS42OTMtNjAuNTk0YzAuNzQsMC4zOSwxLjUwNSwwLjcyMiwyLjMyNiwwLjkyN2M5LjAwNCwyLjI2LDE5LjMwOS03Ljg4NSwyMy4wMTgtMjIuNjYxICBDMzYwLjczMiwyMjEuNTI3LDM1Ni40NzYsMjA3Ljc2MywzNDcuNTMxLDIwNS40NHoiLz4KPHBhdGggc3R5bGU9ImZpbGw6I0U4Q0Y4OTsiIGQ9Ik0zNDcuNTMxLDIwNS40NGMwLjQ1OS00LjI0NCwwLjY5OC04LjQyOCwwLjY5OC0xMi41MDljMC01My44NzItNDEuMTM4LTk3LjU1Ni05MS45NDEtOTcuNzIxdjIyMy4zNjUgIGMzMS4yMjMtMC4xNjcsNTguNzktMjcuMjM2LDc1LjQwNS02MC41ODVjMC43NCwwLjM5LDEuNTA1LDAuNzIyLDIuMzI2LDAuOTI3YzkuMDA0LDIuMjYsMTkuMzA5LTcuODg1LDIzLjAxOC0yMi42NjEgIEMzNjAuNzMyLDIyMS41MjcsMzU2LjQ3NiwyMDcuNzYzLDM0Ny41MzEsMjA1LjQ0eiIvPgo8cGF0aCBzdHlsZT0iZmlsbDojNDk0OTQ4OyIgZD0iTTIwNC4xNCwxNzAuNjY3YzAsMCw0MC4wODEsMzguMzU3LDEyMS45NjYsMjQuNTY2YzAsMCw3Ljk0LTEuOTk4LDIxLjQyNSwxMC4yMDcgIGMwLDAsMjQuNjkxLTUxLjU4MSwxMS4zMzEtMTA0LjU5MWMwLDAtNDMuNTI5LDUuNjAzLTYyLjkyMy02LjQ2NWMtMTkuMzk0LTEyLjA2Ny03MS4xMTEtMjQuOTk3LTgyLjc0NywxMS4yMDUgIGMwLDAtMzcuNDk1LTQuNzQxLTQ3LjgzOCwzNC4wNDdjLTEwLjM0MywzOC43ODgtMC44ODMsNjUuODAzLTAuODgzLDY1LjgwM1MxODMuODg0LDE1OC41OTksMjA0LjE0LDE3MC42Njd6Ii8+CjxnPgoJPHBhdGggc3R5bGU9ImZpbGw6IzMzMzMzMzsiIGQ9Ik0zNTguODYsMTAwLjg0OGMwLDAtNDMuNTI5LDUuNjAzLTYyLjkyMy02LjQ2NWMtOC44MDktNS40ODItMjQuMjg4LTExLjEyNC0zOS42NS0xMi4yNzZ2MTEyLjUwOSAgIGMxOC4zNTgsMy45MjcsNDEuNjA1LDUuMzY4LDY5LjgxOCwwLjYxNWMwLDAsNy45NC0xLjk5OCwyMS40MjUsMTAuMjA3QzM0Ny41MzEsMjA1LjQ0LDM3Mi4yMjEsMTUzLjg1OSwzNTguODYsMTAwLjg0OHoiLz4KCTxwYXRoIHN0eWxlPSJmaWxsOiMzMzMzMzM7IiBkPSJNMjY3LjkxLDUxMS42OTdjMzAuNDg0LTEuMzk4LDU5LjU2NC04LjEzNSw4Ni4zNTQtMTkuMjg3VjM1OS44bC0zNC45MDctNi45ODJMMjY3LjkxLDUxMS42OTd6Ii8+CjwvZz4KPGc+Cgk8cGF0aCBzdHlsZT0iZmlsbDojNDk0OTQ4OyIgZD0iTTI0NC4wOSw1MTEuNjk3Yy0zMC40ODQtMS4zOTgtNTkuNTY0LTguMTM1LTg2LjM1NC0xOS4yODdWMzU5LjhsMzQuOTA3LTYuOTgyTDI0NC4wOSw1MTEuNjk3eiIvPgoJPHBhdGggc3R5bGU9ImZpbGw6IzQ5NDk0ODsiIGQ9Ik0yOTAuMjQ1LDM1NS45MjRsLTI0LjA2MSw4LjgxNGMtMC4zOTgtMS4yNDUtMS41NTItMi4xNTEtMi45MjktMi4xNTFoLTEzLjY0OCAgIGMtMS4zNywwLTIuNTIsMC45LTIuOTI0LDIuMTM2bC0yNC4wMTctOC43OTljLTQuMTYtMS41MjQtOC41NjYsMS41NTUtOC41NjYsNS45ODV2MzAuMzk2YzAsNC40MjksNC40MDYsNy41MDksOC41NjYsNS45ODUgICBsMjQuMDE3LTguNzk5YzAuNDAzLDEuMjM2LDEuNTUyLDIuMTM2LDIuOTI0LDIuMTM2aDEzLjY0OGMxLjM3NywwLDIuNTI5LTAuOTA3LDIuOTI5LTIuMTUxbDI0LjA2MSw4LjgxNCAgIGM0LjE2LDEuNTI0LDguNTY2LTEuNTU1LDguNTY2LTUuOTg1VjM2MS45MUMyOTguODExLDM1Ny40NzksMjk0LjQwNSwzNTQuNDAxLDI5MC4yNDUsMzU1LjkyNHoiLz4KPC9nPgo8cGF0aCBzdHlsZT0iZmlsbDojMzMzMzMzOyIgZD0iTTI5MC4yNDUsMzU1LjkyNGwtMjQuMDYxLDguODE0Yy0wLjM5OC0xLjI0NS0xLjU1Mi0yLjE1MS0yLjkyOS0yLjE1MWgtNi45Njh2MjkuMDQxaDYuOTY4ICBjMS4zNzcsMCwyLjUyOS0wLjkwNywyLjkyOS0yLjE1MWwyNC4wNjEsOC44MTRjNC4xNiwxLjUyNCw4LjU2Ni0xLjU1NSw4LjU2Ni01Ljk4NVYzNjEuOTEgIEMyOTguODExLDM1Ny40NzksMjk0LjQwNSwzNTQuNDAxLDI5MC4yNDUsMzU1LjkyNHoiLz4KPGc+Cgk8Y2lyY2xlIHN0eWxlPSJmaWxsOiNBREFEQUQ7IiBjeD0iMjU2IiBjeT0iNDEwLjI5IiByPSI0LjMxIi8+Cgk8Y2lyY2xlIHN0eWxlPSJmaWxsOiNBREFEQUQ7IiBjeD0iMjU2IiBjeT0iNDMzLjEzMSIgcj0iNC4zMSIvPgoJPGNpcmNsZSBzdHlsZT0iZmlsbDojQURBREFEOyIgY3g9IjI1NiIgY3k9IjQ1NS45NzMiIHI9IjQuMzEiLz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K" })),
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "header" }, "Elliot Fu"),
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "description" }, "Elliot Fu is a film-maker from New York. ghgfhg hgfghhg hgghfhgfghf")),
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Button"].Group, null,
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Button"], null, "+ Connect"),
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Button"].Or, null),
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Button"], null, "Message"))),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "ui card" },
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "middle aligned content uk-text-center" },
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", { className: "ui tiny image cirlce center aligned", href: "#" },
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("img", { className: "circle", 
                                    // tslint:disable-next-line:max-line-length
                                    src: "data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4Ij4KPGNpcmNsZSBzdHlsZT0iZmlsbDojNzFFMkVGOyIgY3g9IjI1NiIgY3k9IjI1NiIgcj0iMjU2Ii8+CjxwYXRoIHN0eWxlPSJmaWxsOiMzOEM2RDk7IiBkPSJNMjI1LjcyNiw0MzkuNTQ2bDY5LjQ2OCw2OS40NjhDNDE3Ljk3NSw0OTAuMTUxLDUxMiwzODQuMDU3LDUxMiwyNTYgIGMwLTAuNjgxLTAuMDIxLTEuMzU4LTAuMDI2LTIuMDM4TDM1OC44NiwxMDAuODQ4TDIyNS43MjYsNDM5LjU0NnoiLz4KPHJlY3QgeD0iMjEzLjMzMyIgeT0iMjkyLjIxOSIgc3R5bGU9ImZpbGw6I0ZDRDA4ODsiIHdpZHRoPSI4NS4zMzMiIGhlaWdodD0iODUuMzMzIi8+CjxyZWN0IHg9IjI1Ni4yOTMiIHk9IjI5Mi4yMTkiIHN0eWxlPSJmaWxsOiNEREFCNjI7IiB3aWR0aD0iNDIuMzc5IiBoZWlnaHQ9Ijg1LjMzMyIvPgo8cGF0aCBzdHlsZT0iZmlsbDojRDlFREVDOyIgZD0iTTM1Ny43NjQsMzYwLjVsLTQ1LjIyLTkuMDQ0bC03Ljk5Mi0xMS42NjZjLTEuNDk2LTIuMTg0LTQuMzI3LTMuMDA3LTYuNzU5LTEuOTY1TDI1NiwzNTUuODMgIGwtNDEuNTQzLTE3Ljk4N2MtMi40MTUtMS4wNTMtNS4yMzktMC4yNjItNi43NTQsMS44OTNsLTguMjQ3LDExLjcxOWwtNDUuMjIsOS4wNDRjLTIzLjAyNCw0LjYwNi0zOS41OTYsMjQuODIxLTM5LjU5Niw0OC4zdjYwLjY0NyAgQzE1NS4xNDgsNDk2LjMyOCwyMDMuNzQsNTEyLDI1Niw1MTJzMTAwLjg1Mi0xNS42NzIsMTQxLjM2LTQyLjU1NXYtNjAuNjQ3QzM5Ny4zNiwzODUuMzE5LDM4MC43ODcsMzY1LjEwNCwzNTcuNzY0LDM2MC41eiIvPgo8cGF0aCBzdHlsZT0iZmlsbDojQzdEOEQ3OyIgZD0iTTM5Ny4zNiw0MDguNzk4YzAtMjMuNDgtMTYuNTc0LTQzLjY5Ni0zOS41OTYtNDguM2wtNDUuMjItOS4wNDRsLTcuOTkyLTExLjY2NiAgYy0xLjQ5Ni0yLjE4NC00LjMyNy0zLjAwNy02Ljc1OS0xLjk2NWwtNDEuNTAzLDE3Ljg4djE1Ni4yODljNTIuMTQ4LTAuMDU3LDEwMC42MzgtMTUuNzE3LDE0MS4wNzItNDIuNTQ5di02MC42NDVIMzk3LjM2eiIvPgo8cGF0aCBzdHlsZT0iZmlsbDojRkZFREI1OyIgZD0iTTM0Ny41MzEsMjA1LjQ0YzAuNDU5LTQuMjQ0LDAuNjk4LTguNDI4LDAuNjk4LTEyLjUwOWMwLTUzLjk3NC00MS4yOTMtOTcuNzI4LTkyLjIyOS05Ny43MjggIHMtOTIuMjI5LDQzLjc1My05Mi4yMjksOTcuNzI4YzAsNC4wOCwwLjI0LDguMjY0LDAuNjk4LDEyLjUwOWMtOC45NDUsMi4zMjYtMTMuMjAyLDE2LjA4Ny05LjUwNiwzMC44MTcgIGMzLjcwOCwxNC43NzYsMTQuMDE0LDI0LjkyMSwyMy4wMTgsMjIuNjYxYzAuODIxLTAuMjA1LDEuNTg2LTAuNTM4LDIuMzI2LTAuOTI3YzE2LjY2NywzMy40NTIsNDQuMzUxLDYwLjU5NCw3NS42OTMsNjAuNTk0ICBzNTkuMDI3LTI3LjEzOSw3NS42OTMtNjAuNTk0YzAuNzQsMC4zOSwxLjUwNSwwLjcyMiwyLjMyNiwwLjkyN2M5LjAwNCwyLjI2LDE5LjMwOS03Ljg4NSwyMy4wMTgtMjIuNjYxICBDMzYwLjczMiwyMjEuNTI3LDM1Ni40NzYsMjA3Ljc2MywzNDcuNTMxLDIwNS40NHoiLz4KPHBhdGggc3R5bGU9ImZpbGw6I0U4Q0Y4OTsiIGQ9Ik0zNDcuNTMxLDIwNS40NGMwLjQ1OS00LjI0NCwwLjY5OC04LjQyOCwwLjY5OC0xMi41MDljMC01My44NzItNDEuMTM4LTk3LjU1Ni05MS45NDEtOTcuNzIxdjIyMy4zNjUgIGMzMS4yMjMtMC4xNjcsNTguNzktMjcuMjM2LDc1LjQwNS02MC41ODVjMC43NCwwLjM5LDEuNTA1LDAuNzIyLDIuMzI2LDAuOTI3YzkuMDA0LDIuMjYsMTkuMzA5LTcuODg1LDIzLjAxOC0yMi42NjEgIEMzNjAuNzMyLDIyMS41MjcsMzU2LjQ3NiwyMDcuNzYzLDM0Ny41MzEsMjA1LjQ0eiIvPgo8cGF0aCBzdHlsZT0iZmlsbDojNDk0OTQ4OyIgZD0iTTIwNC4xNCwxNzAuNjY3YzAsMCw0MC4wODEsMzguMzU3LDEyMS45NjYsMjQuNTY2YzAsMCw3Ljk0LTEuOTk4LDIxLjQyNSwxMC4yMDcgIGMwLDAsMjQuNjkxLTUxLjU4MSwxMS4zMzEtMTA0LjU5MWMwLDAtNDMuNTI5LDUuNjAzLTYyLjkyMy02LjQ2NWMtMTkuMzk0LTEyLjA2Ny03MS4xMTEtMjQuOTk3LTgyLjc0NywxMS4yMDUgIGMwLDAtMzcuNDk1LTQuNzQxLTQ3LjgzOCwzNC4wNDdjLTEwLjM0MywzOC43ODgtMC44ODMsNjUuODAzLTAuODgzLDY1LjgwM1MxODMuODg0LDE1OC41OTksMjA0LjE0LDE3MC42Njd6Ii8+CjxnPgoJPHBhdGggc3R5bGU9ImZpbGw6IzMzMzMzMzsiIGQ9Ik0zNTguODYsMTAwLjg0OGMwLDAtNDMuNTI5LDUuNjAzLTYyLjkyMy02LjQ2NWMtOC44MDktNS40ODItMjQuMjg4LTExLjEyNC0zOS42NS0xMi4yNzZ2MTEyLjUwOSAgIGMxOC4zNTgsMy45MjcsNDEuNjA1LDUuMzY4LDY5LjgxOCwwLjYxNWMwLDAsNy45NC0xLjk5OCwyMS40MjUsMTAuMjA3QzM0Ny41MzEsMjA1LjQ0LDM3Mi4yMjEsMTUzLjg1OSwzNTguODYsMTAwLjg0OHoiLz4KCTxwYXRoIHN0eWxlPSJmaWxsOiMzMzMzMzM7IiBkPSJNMjY3LjkxLDUxMS42OTdjMzAuNDg0LTEuMzk4LDU5LjU2NC04LjEzNSw4Ni4zNTQtMTkuMjg3VjM1OS44bC0zNC45MDctNi45ODJMMjY3LjkxLDUxMS42OTd6Ii8+CjwvZz4KPGc+Cgk8cGF0aCBzdHlsZT0iZmlsbDojNDk0OTQ4OyIgZD0iTTI0NC4wOSw1MTEuNjk3Yy0zMC40ODQtMS4zOTgtNTkuNTY0LTguMTM1LTg2LjM1NC0xOS4yODdWMzU5LjhsMzQuOTA3LTYuOTgyTDI0NC4wOSw1MTEuNjk3eiIvPgoJPHBhdGggc3R5bGU9ImZpbGw6IzQ5NDk0ODsiIGQ9Ik0yOTAuMjQ1LDM1NS45MjRsLTI0LjA2MSw4LjgxNGMtMC4zOTgtMS4yNDUtMS41NTItMi4xNTEtMi45MjktMi4xNTFoLTEzLjY0OCAgIGMtMS4zNywwLTIuNTIsMC45LTIuOTI0LDIuMTM2bC0yNC4wMTctOC43OTljLTQuMTYtMS41MjQtOC41NjYsMS41NTUtOC41NjYsNS45ODV2MzAuMzk2YzAsNC40MjksNC40MDYsNy41MDksOC41NjYsNS45ODUgICBsMjQuMDE3LTguNzk5YzAuNDAzLDEuMjM2LDEuNTUyLDIuMTM2LDIuOTI0LDIuMTM2aDEzLjY0OGMxLjM3NywwLDIuNTI5LTAuOTA3LDIuOTI5LTIuMTUxbDI0LjA2MSw4LjgxNCAgIGM0LjE2LDEuNTI0LDguNTY2LTEuNTU1LDguNTY2LTUuOTg1VjM2MS45MUMyOTguODExLDM1Ny40NzksMjk0LjQwNSwzNTQuNDAxLDI5MC4yNDUsMzU1LjkyNHoiLz4KPC9nPgo8cGF0aCBzdHlsZT0iZmlsbDojMzMzMzMzOyIgZD0iTTI5MC4yNDUsMzU1LjkyNGwtMjQuMDYxLDguODE0Yy0wLjM5OC0xLjI0NS0xLjU1Mi0yLjE1MS0yLjkyOS0yLjE1MWgtNi45Njh2MjkuMDQxaDYuOTY4ICBjMS4zNzcsMCwyLjUyOS0wLjkwNywyLjkyOS0yLjE1MWwyNC4wNjEsOC44MTRjNC4xNiwxLjUyNCw4LjU2Ni0xLjU1NSw4LjU2Ni01Ljk4NVYzNjEuOTEgIEMyOTguODExLDM1Ny40NzksMjk0LjQwNSwzNTQuNDAxLDI5MC4yNDUsMzU1LjkyNHoiLz4KPGc+Cgk8Y2lyY2xlIHN0eWxlPSJmaWxsOiNBREFEQUQ7IiBjeD0iMjU2IiBjeT0iNDEwLjI5IiByPSI0LjMxIi8+Cgk8Y2lyY2xlIHN0eWxlPSJmaWxsOiNBREFEQUQ7IiBjeD0iMjU2IiBjeT0iNDMzLjEzMSIgcj0iNC4zMSIvPgoJPGNpcmNsZSBzdHlsZT0iZmlsbDojQURBREFEOyIgY3g9IjI1NiIgY3k9IjQ1NS45NzMiIHI9IjQuMzEiLz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K" })),
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "header" }, "Elliot Fu"),
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "description" }, "Elliot Fu is a film-maker from New York. ghgfhg hgfghhg hgghfhgfghf")),
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Button"].Group, null,
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Button"], null, "+ Connect"),
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Button"].Or, null),
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Button"], null, "Message"))),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "ui card" },
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "middle aligned content uk-text-center" },
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", { className: "ui tiny image cirlce center aligned", href: "#" },
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("img", { className: "circle", 
                                    // tslint:disable-next-line:max-line-length
                                    src: "data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4Ij4KPGNpcmNsZSBzdHlsZT0iZmlsbDojNzFFMkVGOyIgY3g9IjI1NiIgY3k9IjI1NiIgcj0iMjU2Ii8+CjxwYXRoIHN0eWxlPSJmaWxsOiMzOEM2RDk7IiBkPSJNMjI1LjcyNiw0MzkuNTQ2bDY5LjQ2OCw2OS40NjhDNDE3Ljk3NSw0OTAuMTUxLDUxMiwzODQuMDU3LDUxMiwyNTYgIGMwLTAuNjgxLTAuMDIxLTEuMzU4LTAuMDI2LTIuMDM4TDM1OC44NiwxMDAuODQ4TDIyNS43MjYsNDM5LjU0NnoiLz4KPHJlY3QgeD0iMjEzLjMzMyIgeT0iMjkyLjIxOSIgc3R5bGU9ImZpbGw6I0ZDRDA4ODsiIHdpZHRoPSI4NS4zMzMiIGhlaWdodD0iODUuMzMzIi8+CjxyZWN0IHg9IjI1Ni4yOTMiIHk9IjI5Mi4yMTkiIHN0eWxlPSJmaWxsOiNEREFCNjI7IiB3aWR0aD0iNDIuMzc5IiBoZWlnaHQ9Ijg1LjMzMyIvPgo8cGF0aCBzdHlsZT0iZmlsbDojRDlFREVDOyIgZD0iTTM1Ny43NjQsMzYwLjVsLTQ1LjIyLTkuMDQ0bC03Ljk5Mi0xMS42NjZjLTEuNDk2LTIuMTg0LTQuMzI3LTMuMDA3LTYuNzU5LTEuOTY1TDI1NiwzNTUuODMgIGwtNDEuNTQzLTE3Ljk4N2MtMi40MTUtMS4wNTMtNS4yMzktMC4yNjItNi43NTQsMS44OTNsLTguMjQ3LDExLjcxOWwtNDUuMjIsOS4wNDRjLTIzLjAyNCw0LjYwNi0zOS41OTYsMjQuODIxLTM5LjU5Niw0OC4zdjYwLjY0NyAgQzE1NS4xNDgsNDk2LjMyOCwyMDMuNzQsNTEyLDI1Niw1MTJzMTAwLjg1Mi0xNS42NzIsMTQxLjM2LTQyLjU1NXYtNjAuNjQ3QzM5Ny4zNiwzODUuMzE5LDM4MC43ODcsMzY1LjEwNCwzNTcuNzY0LDM2MC41eiIvPgo8cGF0aCBzdHlsZT0iZmlsbDojQzdEOEQ3OyIgZD0iTTM5Ny4zNiw0MDguNzk4YzAtMjMuNDgtMTYuNTc0LTQzLjY5Ni0zOS41OTYtNDguM2wtNDUuMjItOS4wNDRsLTcuOTkyLTExLjY2NiAgYy0xLjQ5Ni0yLjE4NC00LjMyNy0zLjAwNy02Ljc1OS0xLjk2NWwtNDEuNTAzLDE3Ljg4djE1Ni4yODljNTIuMTQ4LTAuMDU3LDEwMC42MzgtMTUuNzE3LDE0MS4wNzItNDIuNTQ5di02MC42NDVIMzk3LjM2eiIvPgo8cGF0aCBzdHlsZT0iZmlsbDojRkZFREI1OyIgZD0iTTM0Ny41MzEsMjA1LjQ0YzAuNDU5LTQuMjQ0LDAuNjk4LTguNDI4LDAuNjk4LTEyLjUwOWMwLTUzLjk3NC00MS4yOTMtOTcuNzI4LTkyLjIyOS05Ny43MjggIHMtOTIuMjI5LDQzLjc1My05Mi4yMjksOTcuNzI4YzAsNC4wOCwwLjI0LDguMjY0LDAuNjk4LDEyLjUwOWMtOC45NDUsMi4zMjYtMTMuMjAyLDE2LjA4Ny05LjUwNiwzMC44MTcgIGMzLjcwOCwxNC43NzYsMTQuMDE0LDI0LjkyMSwyMy4wMTgsMjIuNjYxYzAuODIxLTAuMjA1LDEuNTg2LTAuNTM4LDIuMzI2LTAuOTI3YzE2LjY2NywzMy40NTIsNDQuMzUxLDYwLjU5NCw3NS42OTMsNjAuNTk0ICBzNTkuMDI3LTI3LjEzOSw3NS42OTMtNjAuNTk0YzAuNzQsMC4zOSwxLjUwNSwwLjcyMiwyLjMyNiwwLjkyN2M5LjAwNCwyLjI2LDE5LjMwOS03Ljg4NSwyMy4wMTgtMjIuNjYxICBDMzYwLjczMiwyMjEuNTI3LDM1Ni40NzYsMjA3Ljc2MywzNDcuNTMxLDIwNS40NHoiLz4KPHBhdGggc3R5bGU9ImZpbGw6I0U4Q0Y4OTsiIGQ9Ik0zNDcuNTMxLDIwNS40NGMwLjQ1OS00LjI0NCwwLjY5OC04LjQyOCwwLjY5OC0xMi41MDljMC01My44NzItNDEuMTM4LTk3LjU1Ni05MS45NDEtOTcuNzIxdjIyMy4zNjUgIGMzMS4yMjMtMC4xNjcsNTguNzktMjcuMjM2LDc1LjQwNS02MC41ODVjMC43NCwwLjM5LDEuNTA1LDAuNzIyLDIuMzI2LDAuOTI3YzkuMDA0LDIuMjYsMTkuMzA5LTcuODg1LDIzLjAxOC0yMi42NjEgIEMzNjAuNzMyLDIyMS41MjcsMzU2LjQ3NiwyMDcuNzYzLDM0Ny41MzEsMjA1LjQ0eiIvPgo8cGF0aCBzdHlsZT0iZmlsbDojNDk0OTQ4OyIgZD0iTTIwNC4xNCwxNzAuNjY3YzAsMCw0MC4wODEsMzguMzU3LDEyMS45NjYsMjQuNTY2YzAsMCw3Ljk0LTEuOTk4LDIxLjQyNSwxMC4yMDcgIGMwLDAsMjQuNjkxLTUxLjU4MSwxMS4zMzEtMTA0LjU5MWMwLDAtNDMuNTI5LDUuNjAzLTYyLjkyMy02LjQ2NWMtMTkuMzk0LTEyLjA2Ny03MS4xMTEtMjQuOTk3LTgyLjc0NywxMS4yMDUgIGMwLDAtMzcuNDk1LTQuNzQxLTQ3LjgzOCwzNC4wNDdjLTEwLjM0MywzOC43ODgtMC44ODMsNjUuODAzLTAuODgzLDY1LjgwM1MxODMuODg0LDE1OC41OTksMjA0LjE0LDE3MC42Njd6Ii8+CjxnPgoJPHBhdGggc3R5bGU9ImZpbGw6IzMzMzMzMzsiIGQ9Ik0zNTguODYsMTAwLjg0OGMwLDAtNDMuNTI5LDUuNjAzLTYyLjkyMy02LjQ2NWMtOC44MDktNS40ODItMjQuMjg4LTExLjEyNC0zOS42NS0xMi4yNzZ2MTEyLjUwOSAgIGMxOC4zNTgsMy45MjcsNDEuNjA1LDUuMzY4LDY5LjgxOCwwLjYxNWMwLDAsNy45NC0xLjk5OCwyMS40MjUsMTAuMjA3QzM0Ny41MzEsMjA1LjQ0LDM3Mi4yMjEsMTUzLjg1OSwzNTguODYsMTAwLjg0OHoiLz4KCTxwYXRoIHN0eWxlPSJmaWxsOiMzMzMzMzM7IiBkPSJNMjY3LjkxLDUxMS42OTdjMzAuNDg0LTEuMzk4LDU5LjU2NC04LjEzNSw4Ni4zNTQtMTkuMjg3VjM1OS44bC0zNC45MDctNi45ODJMMjY3LjkxLDUxMS42OTd6Ii8+CjwvZz4KPGc+Cgk8cGF0aCBzdHlsZT0iZmlsbDojNDk0OTQ4OyIgZD0iTTI0NC4wOSw1MTEuNjk3Yy0zMC40ODQtMS4zOTgtNTkuNTY0LTguMTM1LTg2LjM1NC0xOS4yODdWMzU5LjhsMzQuOTA3LTYuOTgyTDI0NC4wOSw1MTEuNjk3eiIvPgoJPHBhdGggc3R5bGU9ImZpbGw6IzQ5NDk0ODsiIGQ9Ik0yOTAuMjQ1LDM1NS45MjRsLTI0LjA2MSw4LjgxNGMtMC4zOTgtMS4yNDUtMS41NTItMi4xNTEtMi45MjktMi4xNTFoLTEzLjY0OCAgIGMtMS4zNywwLTIuNTIsMC45LTIuOTI0LDIuMTM2bC0yNC4wMTctOC43OTljLTQuMTYtMS41MjQtOC41NjYsMS41NTUtOC41NjYsNS45ODV2MzAuMzk2YzAsNC40MjksNC40MDYsNy41MDksOC41NjYsNS45ODUgICBsMjQuMDE3LTguNzk5YzAuNDAzLDEuMjM2LDEuNTUyLDIuMTM2LDIuOTI0LDIuMTM2aDEzLjY0OGMxLjM3NywwLDIuNTI5LTAuOTA3LDIuOTI5LTIuMTUxbDI0LjA2MSw4LjgxNCAgIGM0LjE2LDEuNTI0LDguNTY2LTEuNTU1LDguNTY2LTUuOTg1VjM2MS45MUMyOTguODExLDM1Ny40NzksMjk0LjQwNSwzNTQuNDAxLDI5MC4yNDUsMzU1LjkyNHoiLz4KPC9nPgo8cGF0aCBzdHlsZT0iZmlsbDojMzMzMzMzOyIgZD0iTTI5MC4yNDUsMzU1LjkyNGwtMjQuMDYxLDguODE0Yy0wLjM5OC0xLjI0NS0xLjU1Mi0yLjE1MS0yLjkyOS0yLjE1MWgtNi45Njh2MjkuMDQxaDYuOTY4ICBjMS4zNzcsMCwyLjUyOS0wLjkwNywyLjkyOS0yLjE1MWwyNC4wNjEsOC44MTRjNC4xNiwxLjUyNCw4LjU2Ni0xLjU1NSw4LjU2Ni01Ljk4NVYzNjEuOTEgIEMyOTguODExLDM1Ny40NzksMjk0LjQwNSwzNTQuNDAxLDI5MC4yNDUsMzU1LjkyNHoiLz4KPGc+Cgk8Y2lyY2xlIHN0eWxlPSJmaWxsOiNBREFEQUQ7IiBjeD0iMjU2IiBjeT0iNDEwLjI5IiByPSI0LjMxIi8+Cgk8Y2lyY2xlIHN0eWxlPSJmaWxsOiNBREFEQUQ7IiBjeD0iMjU2IiBjeT0iNDMzLjEzMSIgcj0iNC4zMSIvPgoJPGNpcmNsZSBzdHlsZT0iZmlsbDojQURBREFEOyIgY3g9IjI1NiIgY3k9IjQ1NS45NzMiIHI9IjQuMzEiLz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K" })),
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "header" }, "Elliot Fu"),
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "description" }, "Elliot Fu is a film-maker from New York. ghgfhg hgfghhg hgghfhgfghf")),
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Button"].Group, null,
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Button"], null, "+ Connect"),
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Button"].Or, null),
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Button"], null, "Message"))),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "ui card" },
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "middle aligned content uk-text-center" },
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", { className: "ui tiny image cirlce center aligned", href: "#" },
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("img", { className: "circle", 
                                    // tslint:disable-next-line:max-line-length
                                    src: "data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4Ij4KPGNpcmNsZSBzdHlsZT0iZmlsbDojNzFFMkVGOyIgY3g9IjI1NiIgY3k9IjI1NiIgcj0iMjU2Ii8+CjxwYXRoIHN0eWxlPSJmaWxsOiMzOEM2RDk7IiBkPSJNMjI1LjcyNiw0MzkuNTQ2bDY5LjQ2OCw2OS40NjhDNDE3Ljk3NSw0OTAuMTUxLDUxMiwzODQuMDU3LDUxMiwyNTYgIGMwLTAuNjgxLTAuMDIxLTEuMzU4LTAuMDI2LTIuMDM4TDM1OC44NiwxMDAuODQ4TDIyNS43MjYsNDM5LjU0NnoiLz4KPHJlY3QgeD0iMjEzLjMzMyIgeT0iMjkyLjIxOSIgc3R5bGU9ImZpbGw6I0ZDRDA4ODsiIHdpZHRoPSI4NS4zMzMiIGhlaWdodD0iODUuMzMzIi8+CjxyZWN0IHg9IjI1Ni4yOTMiIHk9IjI5Mi4yMTkiIHN0eWxlPSJmaWxsOiNEREFCNjI7IiB3aWR0aD0iNDIuMzc5IiBoZWlnaHQ9Ijg1LjMzMyIvPgo8cGF0aCBzdHlsZT0iZmlsbDojRDlFREVDOyIgZD0iTTM1Ny43NjQsMzYwLjVsLTQ1LjIyLTkuMDQ0bC03Ljk5Mi0xMS42NjZjLTEuNDk2LTIuMTg0LTQuMzI3LTMuMDA3LTYuNzU5LTEuOTY1TDI1NiwzNTUuODMgIGwtNDEuNTQzLTE3Ljk4N2MtMi40MTUtMS4wNTMtNS4yMzktMC4yNjItNi43NTQsMS44OTNsLTguMjQ3LDExLjcxOWwtNDUuMjIsOS4wNDRjLTIzLjAyNCw0LjYwNi0zOS41OTYsMjQuODIxLTM5LjU5Niw0OC4zdjYwLjY0NyAgQzE1NS4xNDgsNDk2LjMyOCwyMDMuNzQsNTEyLDI1Niw1MTJzMTAwLjg1Mi0xNS42NzIsMTQxLjM2LTQyLjU1NXYtNjAuNjQ3QzM5Ny4zNiwzODUuMzE5LDM4MC43ODcsMzY1LjEwNCwzNTcuNzY0LDM2MC41eiIvPgo8cGF0aCBzdHlsZT0iZmlsbDojQzdEOEQ3OyIgZD0iTTM5Ny4zNiw0MDguNzk4YzAtMjMuNDgtMTYuNTc0LTQzLjY5Ni0zOS41OTYtNDguM2wtNDUuMjItOS4wNDRsLTcuOTkyLTExLjY2NiAgYy0xLjQ5Ni0yLjE4NC00LjMyNy0zLjAwNy02Ljc1OS0xLjk2NWwtNDEuNTAzLDE3Ljg4djE1Ni4yODljNTIuMTQ4LTAuMDU3LDEwMC42MzgtMTUuNzE3LDE0MS4wNzItNDIuNTQ5di02MC42NDVIMzk3LjM2eiIvPgo8cGF0aCBzdHlsZT0iZmlsbDojRkZFREI1OyIgZD0iTTM0Ny41MzEsMjA1LjQ0YzAuNDU5LTQuMjQ0LDAuNjk4LTguNDI4LDAuNjk4LTEyLjUwOWMwLTUzLjk3NC00MS4yOTMtOTcuNzI4LTkyLjIyOS05Ny43MjggIHMtOTIuMjI5LDQzLjc1My05Mi4yMjksOTcuNzI4YzAsNC4wOCwwLjI0LDguMjY0LDAuNjk4LDEyLjUwOWMtOC45NDUsMi4zMjYtMTMuMjAyLDE2LjA4Ny05LjUwNiwzMC44MTcgIGMzLjcwOCwxNC43NzYsMTQuMDE0LDI0LjkyMSwyMy4wMTgsMjIuNjYxYzAuODIxLTAuMjA1LDEuNTg2LTAuNTM4LDIuMzI2LTAuOTI3YzE2LjY2NywzMy40NTIsNDQuMzUxLDYwLjU5NCw3NS42OTMsNjAuNTk0ICBzNTkuMDI3LTI3LjEzOSw3NS42OTMtNjAuNTk0YzAuNzQsMC4zOSwxLjUwNSwwLjcyMiwyLjMyNiwwLjkyN2M5LjAwNCwyLjI2LDE5LjMwOS03Ljg4NSwyMy4wMTgtMjIuNjYxICBDMzYwLjczMiwyMjEuNTI3LDM1Ni40NzYsMjA3Ljc2MywzNDcuNTMxLDIwNS40NHoiLz4KPHBhdGggc3R5bGU9ImZpbGw6I0U4Q0Y4OTsiIGQ9Ik0zNDcuNTMxLDIwNS40NGMwLjQ1OS00LjI0NCwwLjY5OC04LjQyOCwwLjY5OC0xMi41MDljMC01My44NzItNDEuMTM4LTk3LjU1Ni05MS45NDEtOTcuNzIxdjIyMy4zNjUgIGMzMS4yMjMtMC4xNjcsNTguNzktMjcuMjM2LDc1LjQwNS02MC41ODVjMC43NCwwLjM5LDEuNTA1LDAuNzIyLDIuMzI2LDAuOTI3YzkuMDA0LDIuMjYsMTkuMzA5LTcuODg1LDIzLjAxOC0yMi42NjEgIEMzNjAuNzMyLDIyMS41MjcsMzU2LjQ3NiwyMDcuNzYzLDM0Ny41MzEsMjA1LjQ0eiIvPgo8cGF0aCBzdHlsZT0iZmlsbDojNDk0OTQ4OyIgZD0iTTIwNC4xNCwxNzAuNjY3YzAsMCw0MC4wODEsMzguMzU3LDEyMS45NjYsMjQuNTY2YzAsMCw3Ljk0LTEuOTk4LDIxLjQyNSwxMC4yMDcgIGMwLDAsMjQuNjkxLTUxLjU4MSwxMS4zMzEtMTA0LjU5MWMwLDAtNDMuNTI5LDUuNjAzLTYyLjkyMy02LjQ2NWMtMTkuMzk0LTEyLjA2Ny03MS4xMTEtMjQuOTk3LTgyLjc0NywxMS4yMDUgIGMwLDAtMzcuNDk1LTQuNzQxLTQ3LjgzOCwzNC4wNDdjLTEwLjM0MywzOC43ODgtMC44ODMsNjUuODAzLTAuODgzLDY1LjgwM1MxODMuODg0LDE1OC41OTksMjA0LjE0LDE3MC42Njd6Ii8+CjxnPgoJPHBhdGggc3R5bGU9ImZpbGw6IzMzMzMzMzsiIGQ9Ik0zNTguODYsMTAwLjg0OGMwLDAtNDMuNTI5LDUuNjAzLTYyLjkyMy02LjQ2NWMtOC44MDktNS40ODItMjQuMjg4LTExLjEyNC0zOS42NS0xMi4yNzZ2MTEyLjUwOSAgIGMxOC4zNTgsMy45MjcsNDEuNjA1LDUuMzY4LDY5LjgxOCwwLjYxNWMwLDAsNy45NC0xLjk5OCwyMS40MjUsMTAuMjA3QzM0Ny41MzEsMjA1LjQ0LDM3Mi4yMjEsMTUzLjg1OSwzNTguODYsMTAwLjg0OHoiLz4KCTxwYXRoIHN0eWxlPSJmaWxsOiMzMzMzMzM7IiBkPSJNMjY3LjkxLDUxMS42OTdjMzAuNDg0LTEuMzk4LDU5LjU2NC04LjEzNSw4Ni4zNTQtMTkuMjg3VjM1OS44bC0zNC45MDctNi45ODJMMjY3LjkxLDUxMS42OTd6Ii8+CjwvZz4KPGc+Cgk8cGF0aCBzdHlsZT0iZmlsbDojNDk0OTQ4OyIgZD0iTTI0NC4wOSw1MTEuNjk3Yy0zMC40ODQtMS4zOTgtNTkuNTY0LTguMTM1LTg2LjM1NC0xOS4yODdWMzU5LjhsMzQuOTA3LTYuOTgyTDI0NC4wOSw1MTEuNjk3eiIvPgoJPHBhdGggc3R5bGU9ImZpbGw6IzQ5NDk0ODsiIGQ9Ik0yOTAuMjQ1LDM1NS45MjRsLTI0LjA2MSw4LjgxNGMtMC4zOTgtMS4yNDUtMS41NTItMi4xNTEtMi45MjktMi4xNTFoLTEzLjY0OCAgIGMtMS4zNywwLTIuNTIsMC45LTIuOTI0LDIuMTM2bC0yNC4wMTctOC43OTljLTQuMTYtMS41MjQtOC41NjYsMS41NTUtOC41NjYsNS45ODV2MzAuMzk2YzAsNC40MjksNC40MDYsNy41MDksOC41NjYsNS45ODUgICBsMjQuMDE3LTguNzk5YzAuNDAzLDEuMjM2LDEuNTUyLDIuMTM2LDIuOTI0LDIuMTM2aDEzLjY0OGMxLjM3NywwLDIuNTI5LTAuOTA3LDIuOTI5LTIuMTUxbDI0LjA2MSw4LjgxNCAgIGM0LjE2LDEuNTI0LDguNTY2LTEuNTU1LDguNTY2LTUuOTg1VjM2MS45MUMyOTguODExLDM1Ny40NzksMjk0LjQwNSwzNTQuNDAxLDI5MC4yNDUsMzU1LjkyNHoiLz4KPC9nPgo8cGF0aCBzdHlsZT0iZmlsbDojMzMzMzMzOyIgZD0iTTI5MC4yNDUsMzU1LjkyNGwtMjQuMDYxLDguODE0Yy0wLjM5OC0xLjI0NS0xLjU1Mi0yLjE1MS0yLjkyOS0yLjE1MWgtNi45Njh2MjkuMDQxaDYuOTY4ICBjMS4zNzcsMCwyLjUyOS0wLjkwNywyLjkyOS0yLjE1MWwyNC4wNjEsOC44MTRjNC4xNiwxLjUyNCw4LjU2Ni0xLjU1NSw4LjU2Ni01Ljk4NVYzNjEuOTEgIEMyOTguODExLDM1Ny40NzksMjk0LjQwNSwzNTQuNDAxLDI5MC4yNDUsMzU1LjkyNHoiLz4KPGc+Cgk8Y2lyY2xlIHN0eWxlPSJmaWxsOiNBREFEQUQ7IiBjeD0iMjU2IiBjeT0iNDEwLjI5IiByPSI0LjMxIi8+Cgk8Y2lyY2xlIHN0eWxlPSJmaWxsOiNBREFEQUQ7IiBjeD0iMjU2IiBjeT0iNDMzLjEzMSIgcj0iNC4zMSIvPgoJPGNpcmNsZSBzdHlsZT0iZmlsbDojQURBREFEOyIgY3g9IjI1NiIgY3k9IjQ1NS45NzMiIHI9IjQuMzEiLz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K" })),
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "header" }, "Elliot Fu"),
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "description" }, "Elliot Fu is a film-maker from New York. ghgfhg hgfghhg hgghfhgfghf")),
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Button"].Group, null,
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Button"], null, "+ Connect"),
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Button"].Or, null),
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Button"], null, "Message"))),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "card raised" },
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "middle aligned content uk-text-center" },
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", { className: "ui tiny image cirlce center aligned uk-margin-small", href: "#" },
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("img", { className: "circle", 
                                    // tslint:disable-next-line:max-line-length
                                    src: "data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4Ij4KPGNpcmNsZSBzdHlsZT0iZmlsbDojNzFFMkVGOyIgY3g9IjI1NiIgY3k9IjI1NiIgcj0iMjU2Ii8+CjxwYXRoIHN0eWxlPSJmaWxsOiMzOEM2RDk7IiBkPSJNMjI1LjcyNiw0MzkuNTQ2bDY5LjQ2OCw2OS40NjhDNDE3Ljk3NSw0OTAuMTUxLDUxMiwzODQuMDU3LDUxMiwyNTYgIGMwLTAuNjgxLTAuMDIxLTEuMzU4LTAuMDI2LTIuMDM4TDM1OC44NiwxMDAuODQ4TDIyNS43MjYsNDM5LjU0NnoiLz4KPHJlY3QgeD0iMjEzLjMzMyIgeT0iMjkyLjIxOSIgc3R5bGU9ImZpbGw6I0ZDRDA4ODsiIHdpZHRoPSI4NS4zMzMiIGhlaWdodD0iODUuMzMzIi8+CjxyZWN0IHg9IjI1Ni4yOTMiIHk9IjI5Mi4yMTkiIHN0eWxlPSJmaWxsOiNEREFCNjI7IiB3aWR0aD0iNDIuMzc5IiBoZWlnaHQ9Ijg1LjMzMyIvPgo8cGF0aCBzdHlsZT0iZmlsbDojRDlFREVDOyIgZD0iTTM1Ny43NjQsMzYwLjVsLTQ1LjIyLTkuMDQ0bC03Ljk5Mi0xMS42NjZjLTEuNDk2LTIuMTg0LTQuMzI3LTMuMDA3LTYuNzU5LTEuOTY1TDI1NiwzNTUuODMgIGwtNDEuNTQzLTE3Ljk4N2MtMi40MTUtMS4wNTMtNS4yMzktMC4yNjItNi43NTQsMS44OTNsLTguMjQ3LDExLjcxOWwtNDUuMjIsOS4wNDRjLTIzLjAyNCw0LjYwNi0zOS41OTYsMjQuODIxLTM5LjU5Niw0OC4zdjYwLjY0NyAgQzE1NS4xNDgsNDk2LjMyOCwyMDMuNzQsNTEyLDI1Niw1MTJzMTAwLjg1Mi0xNS42NzIsMTQxLjM2LTQyLjU1NXYtNjAuNjQ3QzM5Ny4zNiwzODUuMzE5LDM4MC43ODcsMzY1LjEwNCwzNTcuNzY0LDM2MC41eiIvPgo8cGF0aCBzdHlsZT0iZmlsbDojQzdEOEQ3OyIgZD0iTTM5Ny4zNiw0MDguNzk4YzAtMjMuNDgtMTYuNTc0LTQzLjY5Ni0zOS41OTYtNDguM2wtNDUuMjItOS4wNDRsLTcuOTkyLTExLjY2NiAgYy0xLjQ5Ni0yLjE4NC00LjMyNy0zLjAwNy02Ljc1OS0xLjk2NWwtNDEuNTAzLDE3Ljg4djE1Ni4yODljNTIuMTQ4LTAuMDU3LDEwMC42MzgtMTUuNzE3LDE0MS4wNzItNDIuNTQ5di02MC42NDVIMzk3LjM2eiIvPgo8cGF0aCBzdHlsZT0iZmlsbDojRkZFREI1OyIgZD0iTTM0Ny41MzEsMjA1LjQ0YzAuNDU5LTQuMjQ0LDAuNjk4LTguNDI4LDAuNjk4LTEyLjUwOWMwLTUzLjk3NC00MS4yOTMtOTcuNzI4LTkyLjIyOS05Ny43MjggIHMtOTIuMjI5LDQzLjc1My05Mi4yMjksOTcuNzI4YzAsNC4wOCwwLjI0LDguMjY0LDAuNjk4LDEyLjUwOWMtOC45NDUsMi4zMjYtMTMuMjAyLDE2LjA4Ny05LjUwNiwzMC44MTcgIGMzLjcwOCwxNC43NzYsMTQuMDE0LDI0LjkyMSwyMy4wMTgsMjIuNjYxYzAuODIxLTAuMjA1LDEuNTg2LTAuNTM4LDIuMzI2LTAuOTI3YzE2LjY2NywzMy40NTIsNDQuMzUxLDYwLjU5NCw3NS42OTMsNjAuNTk0ICBzNTkuMDI3LTI3LjEzOSw3NS42OTMtNjAuNTk0YzAuNzQsMC4zOSwxLjUwNSwwLjcyMiwyLjMyNiwwLjkyN2M5LjAwNCwyLjI2LDE5LjMwOS03Ljg4NSwyMy4wMTgtMjIuNjYxICBDMzYwLjczMiwyMjEuNTI3LDM1Ni40NzYsMjA3Ljc2MywzNDcuNTMxLDIwNS40NHoiLz4KPHBhdGggc3R5bGU9ImZpbGw6I0U4Q0Y4OTsiIGQ9Ik0zNDcuNTMxLDIwNS40NGMwLjQ1OS00LjI0NCwwLjY5OC04LjQyOCwwLjY5OC0xMi41MDljMC01My44NzItNDEuMTM4LTk3LjU1Ni05MS45NDEtOTcuNzIxdjIyMy4zNjUgIGMzMS4yMjMtMC4xNjcsNTguNzktMjcuMjM2LDc1LjQwNS02MC41ODVjMC43NCwwLjM5LDEuNTA1LDAuNzIyLDIuMzI2LDAuOTI3YzkuMDA0LDIuMjYsMTkuMzA5LTcuODg1LDIzLjAxOC0yMi42NjEgIEMzNjAuNzMyLDIyMS41MjcsMzU2LjQ3NiwyMDcuNzYzLDM0Ny41MzEsMjA1LjQ0eiIvPgo8cGF0aCBzdHlsZT0iZmlsbDojNDk0OTQ4OyIgZD0iTTIwNC4xNCwxNzAuNjY3YzAsMCw0MC4wODEsMzguMzU3LDEyMS45NjYsMjQuNTY2YzAsMCw3Ljk0LTEuOTk4LDIxLjQyNSwxMC4yMDcgIGMwLDAsMjQuNjkxLTUxLjU4MSwxMS4zMzEtMTA0LjU5MWMwLDAtNDMuNTI5LDUuNjAzLTYyLjkyMy02LjQ2NWMtMTkuMzk0LTEyLjA2Ny03MS4xMTEtMjQuOTk3LTgyLjc0NywxMS4yMDUgIGMwLDAtMzcuNDk1LTQuNzQxLTQ3LjgzOCwzNC4wNDdjLTEwLjM0MywzOC43ODgtMC44ODMsNjUuODAzLTAuODgzLDY1LjgwM1MxODMuODg0LDE1OC41OTksMjA0LjE0LDE3MC42Njd6Ii8+CjxnPgoJPHBhdGggc3R5bGU9ImZpbGw6IzMzMzMzMzsiIGQ9Ik0zNTguODYsMTAwLjg0OGMwLDAtNDMuNTI5LDUuNjAzLTYyLjkyMy02LjQ2NWMtOC44MDktNS40ODItMjQuMjg4LTExLjEyNC0zOS42NS0xMi4yNzZ2MTEyLjUwOSAgIGMxOC4zNTgsMy45MjcsNDEuNjA1LDUuMzY4LDY5LjgxOCwwLjYxNWMwLDAsNy45NC0xLjk5OCwyMS40MjUsMTAuMjA3QzM0Ny41MzEsMjA1LjQ0LDM3Mi4yMjEsMTUzLjg1OSwzNTguODYsMTAwLjg0OHoiLz4KCTxwYXRoIHN0eWxlPSJmaWxsOiMzMzMzMzM7IiBkPSJNMjY3LjkxLDUxMS42OTdjMzAuNDg0LTEuMzk4LDU5LjU2NC04LjEzNSw4Ni4zNTQtMTkuMjg3VjM1OS44bC0zNC45MDctNi45ODJMMjY3LjkxLDUxMS42OTd6Ii8+CjwvZz4KPGc+Cgk8cGF0aCBzdHlsZT0iZmlsbDojNDk0OTQ4OyIgZD0iTTI0NC4wOSw1MTEuNjk3Yy0zMC40ODQtMS4zOTgtNTkuNTY0LTguMTM1LTg2LjM1NC0xOS4yODdWMzU5LjhsMzQuOTA3LTYuOTgyTDI0NC4wOSw1MTEuNjk3eiIvPgoJPHBhdGggc3R5bGU9ImZpbGw6IzQ5NDk0ODsiIGQ9Ik0yOTAuMjQ1LDM1NS45MjRsLTI0LjA2MSw4LjgxNGMtMC4zOTgtMS4yNDUtMS41NTItMi4xNTEtMi45MjktMi4xNTFoLTEzLjY0OCAgIGMtMS4zNywwLTIuNTIsMC45LTIuOTI0LDIuMTM2bC0yNC4wMTctOC43OTljLTQuMTYtMS41MjQtOC41NjYsMS41NTUtOC41NjYsNS45ODV2MzAuMzk2YzAsNC40MjksNC40MDYsNy41MDksOC41NjYsNS45ODUgICBsMjQuMDE3LTguNzk5YzAuNDAzLDEuMjM2LDEuNTUyLDIuMTM2LDIuOTI0LDIuMTM2aDEzLjY0OGMxLjM3NywwLDIuNTI5LTAuOTA3LDIuOTI5LTIuMTUxbDI0LjA2MSw4LjgxNCAgIGM0LjE2LDEuNTI0LDguNTY2LTEuNTU1LDguNTY2LTUuOTg1VjM2MS45MUMyOTguODExLDM1Ny40NzksMjk0LjQwNSwzNTQuNDAxLDI5MC4yNDUsMzU1LjkyNHoiLz4KPC9nPgo8cGF0aCBzdHlsZT0iZmlsbDojMzMzMzMzOyIgZD0iTTI5MC4yNDUsMzU1LjkyNGwtMjQuMDYxLDguODE0Yy0wLjM5OC0xLjI0NS0xLjU1Mi0yLjE1MS0yLjkyOS0yLjE1MWgtNi45Njh2MjkuMDQxaDYuOTY4ICBjMS4zNzcsMCwyLjUyOS0wLjkwNywyLjkyOS0yLjE1MWwyNC4wNjEsOC44MTRjNC4xNiwxLjUyNCw4LjU2Ni0xLjU1NSw4LjU2Ni01Ljk4NVYzNjEuOTEgIEMyOTguODExLDM1Ny40NzksMjk0LjQwNSwzNTQuNDAxLDI5MC4yNDUsMzU1LjkyNHoiLz4KPGc+Cgk8Y2lyY2xlIHN0eWxlPSJmaWxsOiNBREFEQUQ7IiBjeD0iMjU2IiBjeT0iNDEwLjI5IiByPSI0LjMxIi8+Cgk8Y2lyY2xlIHN0eWxlPSJmaWxsOiNBREFEQUQ7IiBjeD0iMjU2IiBjeT0iNDMzLjEzMSIgcj0iNC4zMSIvPgoJPGNpcmNsZSBzdHlsZT0iZmlsbDojQURBREFEOyIgY3g9IjI1NiIgY3k9IjQ1NS45NzMiIHI9IjQuMzEiLz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K" })),
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "header" }, "Elliot Fu"),
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "description" }, "Elliot Fu is a film-maker from New York. ghgfhg hgfghhg hgghfhgfghf"),
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "description bolder tags ui label", style: { marginTop: 10 } }, "University of PortHarcourt")),
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Button"].Group, null,
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Button"], { positive: true }, "+ Connect"),
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Button"].Or, null),
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Button"], { information: true }, "Message"))),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "ui card" },
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "middle aligned content uk-text-center" },
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", { className: "ui tiny image cirlce center aligned", href: "#" },
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("img", { className: "circle", 
                                    // tslint:disable-next-line:max-line-length
                                    src: "data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4Ij4KPGNpcmNsZSBzdHlsZT0iZmlsbDojNzFFMkVGOyIgY3g9IjI1NiIgY3k9IjI1NiIgcj0iMjU2Ii8+CjxwYXRoIHN0eWxlPSJmaWxsOiMzOEM2RDk7IiBkPSJNMjI1LjcyNiw0MzkuNTQ2bDY5LjQ2OCw2OS40NjhDNDE3Ljk3NSw0OTAuMTUxLDUxMiwzODQuMDU3LDUxMiwyNTYgIGMwLTAuNjgxLTAuMDIxLTEuMzU4LTAuMDI2LTIuMDM4TDM1OC44NiwxMDAuODQ4TDIyNS43MjYsNDM5LjU0NnoiLz4KPHJlY3QgeD0iMjEzLjMzMyIgeT0iMjkyLjIxOSIgc3R5bGU9ImZpbGw6I0ZDRDA4ODsiIHdpZHRoPSI4NS4zMzMiIGhlaWdodD0iODUuMzMzIi8+CjxyZWN0IHg9IjI1Ni4yOTMiIHk9IjI5Mi4yMTkiIHN0eWxlPSJmaWxsOiNEREFCNjI7IiB3aWR0aD0iNDIuMzc5IiBoZWlnaHQ9Ijg1LjMzMyIvPgo8cGF0aCBzdHlsZT0iZmlsbDojRDlFREVDOyIgZD0iTTM1Ny43NjQsMzYwLjVsLTQ1LjIyLTkuMDQ0bC03Ljk5Mi0xMS42NjZjLTEuNDk2LTIuMTg0LTQuMzI3LTMuMDA3LTYuNzU5LTEuOTY1TDI1NiwzNTUuODMgIGwtNDEuNTQzLTE3Ljk4N2MtMi40MTUtMS4wNTMtNS4yMzktMC4yNjItNi43NTQsMS44OTNsLTguMjQ3LDExLjcxOWwtNDUuMjIsOS4wNDRjLTIzLjAyNCw0LjYwNi0zOS41OTYsMjQuODIxLTM5LjU5Niw0OC4zdjYwLjY0NyAgQzE1NS4xNDgsNDk2LjMyOCwyMDMuNzQsNTEyLDI1Niw1MTJzMTAwLjg1Mi0xNS42NzIsMTQxLjM2LTQyLjU1NXYtNjAuNjQ3QzM5Ny4zNiwzODUuMzE5LDM4MC43ODcsMzY1LjEwNCwzNTcuNzY0LDM2MC41eiIvPgo8cGF0aCBzdHlsZT0iZmlsbDojQzdEOEQ3OyIgZD0iTTM5Ny4zNiw0MDguNzk4YzAtMjMuNDgtMTYuNTc0LTQzLjY5Ni0zOS41OTYtNDguM2wtNDUuMjItOS4wNDRsLTcuOTkyLTExLjY2NiAgYy0xLjQ5Ni0yLjE4NC00LjMyNy0zLjAwNy02Ljc1OS0xLjk2NWwtNDEuNTAzLDE3Ljg4djE1Ni4yODljNTIuMTQ4LTAuMDU3LDEwMC42MzgtMTUuNzE3LDE0MS4wNzItNDIuNTQ5di02MC42NDVIMzk3LjM2eiIvPgo8cGF0aCBzdHlsZT0iZmlsbDojRkZFREI1OyIgZD0iTTM0Ny41MzEsMjA1LjQ0YzAuNDU5LTQuMjQ0LDAuNjk4LTguNDI4LDAuNjk4LTEyLjUwOWMwLTUzLjk3NC00MS4yOTMtOTcuNzI4LTkyLjIyOS05Ny43MjggIHMtOTIuMjI5LDQzLjc1My05Mi4yMjksOTcuNzI4YzAsNC4wOCwwLjI0LDguMjY0LDAuNjk4LDEyLjUwOWMtOC45NDUsMi4zMjYtMTMuMjAyLDE2LjA4Ny05LjUwNiwzMC44MTcgIGMzLjcwOCwxNC43NzYsMTQuMDE0LDI0LjkyMSwyMy4wMTgsMjIuNjYxYzAuODIxLTAuMjA1LDEuNTg2LTAuNTM4LDIuMzI2LTAuOTI3YzE2LjY2NywzMy40NTIsNDQuMzUxLDYwLjU5NCw3NS42OTMsNjAuNTk0ICBzNTkuMDI3LTI3LjEzOSw3NS42OTMtNjAuNTk0YzAuNzQsMC4zOSwxLjUwNSwwLjcyMiwyLjMyNiwwLjkyN2M5LjAwNCwyLjI2LDE5LjMwOS03Ljg4NSwyMy4wMTgtMjIuNjYxICBDMzYwLjczMiwyMjEuNTI3LDM1Ni40NzYsMjA3Ljc2MywzNDcuNTMxLDIwNS40NHoiLz4KPHBhdGggc3R5bGU9ImZpbGw6I0U4Q0Y4OTsiIGQ9Ik0zNDcuNTMxLDIwNS40NGMwLjQ1OS00LjI0NCwwLjY5OC04LjQyOCwwLjY5OC0xMi41MDljMC01My44NzItNDEuMTM4LTk3LjU1Ni05MS45NDEtOTcuNzIxdjIyMy4zNjUgIGMzMS4yMjMtMC4xNjcsNTguNzktMjcuMjM2LDc1LjQwNS02MC41ODVjMC43NCwwLjM5LDEuNTA1LDAuNzIyLDIuMzI2LDAuOTI3YzkuMDA0LDIuMjYsMTkuMzA5LTcuODg1LDIzLjAxOC0yMi42NjEgIEMzNjAuNzMyLDIyMS41MjcsMzU2LjQ3NiwyMDcuNzYzLDM0Ny41MzEsMjA1LjQ0eiIvPgo8cGF0aCBzdHlsZT0iZmlsbDojNDk0OTQ4OyIgZD0iTTIwNC4xNCwxNzAuNjY3YzAsMCw0MC4wODEsMzguMzU3LDEyMS45NjYsMjQuNTY2YzAsMCw3Ljk0LTEuOTk4LDIxLjQyNSwxMC4yMDcgIGMwLDAsMjQuNjkxLTUxLjU4MSwxMS4zMzEtMTA0LjU5MWMwLDAtNDMuNTI5LDUuNjAzLTYyLjkyMy02LjQ2NWMtMTkuMzk0LTEyLjA2Ny03MS4xMTEtMjQuOTk3LTgyLjc0NywxMS4yMDUgIGMwLDAtMzcuNDk1LTQuNzQxLTQ3LjgzOCwzNC4wNDdjLTEwLjM0MywzOC43ODgtMC44ODMsNjUuODAzLTAuODgzLDY1LjgwM1MxODMuODg0LDE1OC41OTksMjA0LjE0LDE3MC42Njd6Ii8+CjxnPgoJPHBhdGggc3R5bGU9ImZpbGw6IzMzMzMzMzsiIGQ9Ik0zNTguODYsMTAwLjg0OGMwLDAtNDMuNTI5LDUuNjAzLTYyLjkyMy02LjQ2NWMtOC44MDktNS40ODItMjQuMjg4LTExLjEyNC0zOS42NS0xMi4yNzZ2MTEyLjUwOSAgIGMxOC4zNTgsMy45MjcsNDEuNjA1LDUuMzY4LDY5LjgxOCwwLjYxNWMwLDAsNy45NC0xLjk5OCwyMS40MjUsMTAuMjA3QzM0Ny41MzEsMjA1LjQ0LDM3Mi4yMjEsMTUzLjg1OSwzNTguODYsMTAwLjg0OHoiLz4KCTxwYXRoIHN0eWxlPSJmaWxsOiMzMzMzMzM7IiBkPSJNMjY3LjkxLDUxMS42OTdjMzAuNDg0LTEuMzk4LDU5LjU2NC04LjEzNSw4Ni4zNTQtMTkuMjg3VjM1OS44bC0zNC45MDctNi45ODJMMjY3LjkxLDUxMS42OTd6Ii8+CjwvZz4KPGc+Cgk8cGF0aCBzdHlsZT0iZmlsbDojNDk0OTQ4OyIgZD0iTTI0NC4wOSw1MTEuNjk3Yy0zMC40ODQtMS4zOTgtNTkuNTY0LTguMTM1LTg2LjM1NC0xOS4yODdWMzU5LjhsMzQuOTA3LTYuOTgyTDI0NC4wOSw1MTEuNjk3eiIvPgoJPHBhdGggc3R5bGU9ImZpbGw6IzQ5NDk0ODsiIGQ9Ik0yOTAuMjQ1LDM1NS45MjRsLTI0LjA2MSw4LjgxNGMtMC4zOTgtMS4yNDUtMS41NTItMi4xNTEtMi45MjktMi4xNTFoLTEzLjY0OCAgIGMtMS4zNywwLTIuNTIsMC45LTIuOTI0LDIuMTM2bC0yNC4wMTctOC43OTljLTQuMTYtMS41MjQtOC41NjYsMS41NTUtOC41NjYsNS45ODV2MzAuMzk2YzAsNC40MjksNC40MDYsNy41MDksOC41NjYsNS45ODUgICBsMjQuMDE3LTguNzk5YzAuNDAzLDEuMjM2LDEuNTUyLDIuMTM2LDIuOTI0LDIuMTM2aDEzLjY0OGMxLjM3NywwLDIuNTI5LTAuOTA3LDIuOTI5LTIuMTUxbDI0LjA2MSw4LjgxNCAgIGM0LjE2LDEuNTI0LDguNTY2LTEuNTU1LDguNTY2LTUuOTg1VjM2MS45MUMyOTguODExLDM1Ny40NzksMjk0LjQwNSwzNTQuNDAxLDI5MC4yNDUsMzU1LjkyNHoiLz4KPC9nPgo8cGF0aCBzdHlsZT0iZmlsbDojMzMzMzMzOyIgZD0iTTI5MC4yNDUsMzU1LjkyNGwtMjQuMDYxLDguODE0Yy0wLjM5OC0xLjI0NS0xLjU1Mi0yLjE1MS0yLjkyOS0yLjE1MWgtNi45Njh2MjkuMDQxaDYuOTY4ICBjMS4zNzcsMCwyLjUyOS0wLjkwNywyLjkyOS0yLjE1MWwyNC4wNjEsOC44MTRjNC4xNiwxLjUyNCw4LjU2Ni0xLjU1NSw4LjU2Ni01Ljk4NVYzNjEuOTEgIEMyOTguODExLDM1Ny40NzksMjk0LjQwNSwzNTQuNDAxLDI5MC4yNDUsMzU1LjkyNHoiLz4KPGc+Cgk8Y2lyY2xlIHN0eWxlPSJmaWxsOiNBREFEQUQ7IiBjeD0iMjU2IiBjeT0iNDEwLjI5IiByPSI0LjMxIi8+Cgk8Y2lyY2xlIHN0eWxlPSJmaWxsOiNBREFEQUQ7IiBjeD0iMjU2IiBjeT0iNDMzLjEzMSIgcj0iNC4zMSIvPgoJPGNpcmNsZSBzdHlsZT0iZmlsbDojQURBREFEOyIgY3g9IjI1NiIgY3k9IjQ1NS45NzMiIHI9IjQuMzEiLz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K" })),
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "header" }, "Elliot Fu"),
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "description" }, "Elliot Fu is a film-maker from New York. ghgfhg hgfghhg hgghfhgfghf")),
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Button"].Group, null,
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Button"], null, "+ Connect"),
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Button"].Or, null),
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Button"], null, "Message"))),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "ui card" },
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "middle aligned content uk-text-center" },
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", { className: "ui tiny image cirlce center aligned", href: "#" },
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("img", { className: "circle", 
                                    // tslint:disable-next-line:max-line-length
                                    src: "data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4Ij4KPGNpcmNsZSBzdHlsZT0iZmlsbDojNzFFMkVGOyIgY3g9IjI1NiIgY3k9IjI1NiIgcj0iMjU2Ii8+CjxwYXRoIHN0eWxlPSJmaWxsOiMzOEM2RDk7IiBkPSJNMjI1LjcyNiw0MzkuNTQ2bDY5LjQ2OCw2OS40NjhDNDE3Ljk3NSw0OTAuMTUxLDUxMiwzODQuMDU3LDUxMiwyNTYgIGMwLTAuNjgxLTAuMDIxLTEuMzU4LTAuMDI2LTIuMDM4TDM1OC44NiwxMDAuODQ4TDIyNS43MjYsNDM5LjU0NnoiLz4KPHJlY3QgeD0iMjEzLjMzMyIgeT0iMjkyLjIxOSIgc3R5bGU9ImZpbGw6I0ZDRDA4ODsiIHdpZHRoPSI4NS4zMzMiIGhlaWdodD0iODUuMzMzIi8+CjxyZWN0IHg9IjI1Ni4yOTMiIHk9IjI5Mi4yMTkiIHN0eWxlPSJmaWxsOiNEREFCNjI7IiB3aWR0aD0iNDIuMzc5IiBoZWlnaHQ9Ijg1LjMzMyIvPgo8cGF0aCBzdHlsZT0iZmlsbDojRDlFREVDOyIgZD0iTTM1Ny43NjQsMzYwLjVsLTQ1LjIyLTkuMDQ0bC03Ljk5Mi0xMS42NjZjLTEuNDk2LTIuMTg0LTQuMzI3LTMuMDA3LTYuNzU5LTEuOTY1TDI1NiwzNTUuODMgIGwtNDEuNTQzLTE3Ljk4N2MtMi40MTUtMS4wNTMtNS4yMzktMC4yNjItNi43NTQsMS44OTNsLTguMjQ3LDExLjcxOWwtNDUuMjIsOS4wNDRjLTIzLjAyNCw0LjYwNi0zOS41OTYsMjQuODIxLTM5LjU5Niw0OC4zdjYwLjY0NyAgQzE1NS4xNDgsNDk2LjMyOCwyMDMuNzQsNTEyLDI1Niw1MTJzMTAwLjg1Mi0xNS42NzIsMTQxLjM2LTQyLjU1NXYtNjAuNjQ3QzM5Ny4zNiwzODUuMzE5LDM4MC43ODcsMzY1LjEwNCwzNTcuNzY0LDM2MC41eiIvPgo8cGF0aCBzdHlsZT0iZmlsbDojQzdEOEQ3OyIgZD0iTTM5Ny4zNiw0MDguNzk4YzAtMjMuNDgtMTYuNTc0LTQzLjY5Ni0zOS41OTYtNDguM2wtNDUuMjItOS4wNDRsLTcuOTkyLTExLjY2NiAgYy0xLjQ5Ni0yLjE4NC00LjMyNy0zLjAwNy02Ljc1OS0xLjk2NWwtNDEuNTAzLDE3Ljg4djE1Ni4yODljNTIuMTQ4LTAuMDU3LDEwMC42MzgtMTUuNzE3LDE0MS4wNzItNDIuNTQ5di02MC42NDVIMzk3LjM2eiIvPgo8cGF0aCBzdHlsZT0iZmlsbDojRkZFREI1OyIgZD0iTTM0Ny41MzEsMjA1LjQ0YzAuNDU5LTQuMjQ0LDAuNjk4LTguNDI4LDAuNjk4LTEyLjUwOWMwLTUzLjk3NC00MS4yOTMtOTcuNzI4LTkyLjIyOS05Ny43MjggIHMtOTIuMjI5LDQzLjc1My05Mi4yMjksOTcuNzI4YzAsNC4wOCwwLjI0LDguMjY0LDAuNjk4LDEyLjUwOWMtOC45NDUsMi4zMjYtMTMuMjAyLDE2LjA4Ny05LjUwNiwzMC44MTcgIGMzLjcwOCwxNC43NzYsMTQuMDE0LDI0LjkyMSwyMy4wMTgsMjIuNjYxYzAuODIxLTAuMjA1LDEuNTg2LTAuNTM4LDIuMzI2LTAuOTI3YzE2LjY2NywzMy40NTIsNDQuMzUxLDYwLjU5NCw3NS42OTMsNjAuNTk0ICBzNTkuMDI3LTI3LjEzOSw3NS42OTMtNjAuNTk0YzAuNzQsMC4zOSwxLjUwNSwwLjcyMiwyLjMyNiwwLjkyN2M5LjAwNCwyLjI2LDE5LjMwOS03Ljg4NSwyMy4wMTgtMjIuNjYxICBDMzYwLjczMiwyMjEuNTI3LDM1Ni40NzYsMjA3Ljc2MywzNDcuNTMxLDIwNS40NHoiLz4KPHBhdGggc3R5bGU9ImZpbGw6I0U4Q0Y4OTsiIGQ9Ik0zNDcuNTMxLDIwNS40NGMwLjQ1OS00LjI0NCwwLjY5OC04LjQyOCwwLjY5OC0xMi41MDljMC01My44NzItNDEuMTM4LTk3LjU1Ni05MS45NDEtOTcuNzIxdjIyMy4zNjUgIGMzMS4yMjMtMC4xNjcsNTguNzktMjcuMjM2LDc1LjQwNS02MC41ODVjMC43NCwwLjM5LDEuNTA1LDAuNzIyLDIuMzI2LDAuOTI3YzkuMDA0LDIuMjYsMTkuMzA5LTcuODg1LDIzLjAxOC0yMi42NjEgIEMzNjAuNzMyLDIyMS41MjcsMzU2LjQ3NiwyMDcuNzYzLDM0Ny41MzEsMjA1LjQ0eiIvPgo8cGF0aCBzdHlsZT0iZmlsbDojNDk0OTQ4OyIgZD0iTTIwNC4xNCwxNzAuNjY3YzAsMCw0MC4wODEsMzguMzU3LDEyMS45NjYsMjQuNTY2YzAsMCw3Ljk0LTEuOTk4LDIxLjQyNSwxMC4yMDcgIGMwLDAsMjQuNjkxLTUxLjU4MSwxMS4zMzEtMTA0LjU5MWMwLDAtNDMuNTI5LDUuNjAzLTYyLjkyMy02LjQ2NWMtMTkuMzk0LTEyLjA2Ny03MS4xMTEtMjQuOTk3LTgyLjc0NywxMS4yMDUgIGMwLDAtMzcuNDk1LTQuNzQxLTQ3LjgzOCwzNC4wNDdjLTEwLjM0MywzOC43ODgtMC44ODMsNjUuODAzLTAuODgzLDY1LjgwM1MxODMuODg0LDE1OC41OTksMjA0LjE0LDE3MC42Njd6Ii8+CjxnPgoJPHBhdGggc3R5bGU9ImZpbGw6IzMzMzMzMzsiIGQ9Ik0zNTguODYsMTAwLjg0OGMwLDAtNDMuNTI5LDUuNjAzLTYyLjkyMy02LjQ2NWMtOC44MDktNS40ODItMjQuMjg4LTExLjEyNC0zOS42NS0xMi4yNzZ2MTEyLjUwOSAgIGMxOC4zNTgsMy45MjcsNDEuNjA1LDUuMzY4LDY5LjgxOCwwLjYxNWMwLDAsNy45NC0xLjk5OCwyMS40MjUsMTAuMjA3QzM0Ny41MzEsMjA1LjQ0LDM3Mi4yMjEsMTUzLjg1OSwzNTguODYsMTAwLjg0OHoiLz4KCTxwYXRoIHN0eWxlPSJmaWxsOiMzMzMzMzM7IiBkPSJNMjY3LjkxLDUxMS42OTdjMzAuNDg0LTEuMzk4LDU5LjU2NC04LjEzNSw4Ni4zNTQtMTkuMjg3VjM1OS44bC0zNC45MDctNi45ODJMMjY3LjkxLDUxMS42OTd6Ii8+CjwvZz4KPGc+Cgk8cGF0aCBzdHlsZT0iZmlsbDojNDk0OTQ4OyIgZD0iTTI0NC4wOSw1MTEuNjk3Yy0zMC40ODQtMS4zOTgtNTkuNTY0LTguMTM1LTg2LjM1NC0xOS4yODdWMzU5LjhsMzQuOTA3LTYuOTgyTDI0NC4wOSw1MTEuNjk3eiIvPgoJPHBhdGggc3R5bGU9ImZpbGw6IzQ5NDk0ODsiIGQ9Ik0yOTAuMjQ1LDM1NS45MjRsLTI0LjA2MSw4LjgxNGMtMC4zOTgtMS4yNDUtMS41NTItMi4xNTEtMi45MjktMi4xNTFoLTEzLjY0OCAgIGMtMS4zNywwLTIuNTIsMC45LTIuOTI0LDIuMTM2bC0yNC4wMTctOC43OTljLTQuMTYtMS41MjQtOC41NjYsMS41NTUtOC41NjYsNS45ODV2MzAuMzk2YzAsNC40MjksNC40MDYsNy41MDksOC41NjYsNS45ODUgICBsMjQuMDE3LTguNzk5YzAuNDAzLDEuMjM2LDEuNTUyLDIuMTM2LDIuOTI0LDIuMTM2aDEzLjY0OGMxLjM3NywwLDIuNTI5LTAuOTA3LDIuOTI5LTIuMTUxbDI0LjA2MSw4LjgxNCAgIGM0LjE2LDEuNTI0LDguNTY2LTEuNTU1LDguNTY2LTUuOTg1VjM2MS45MUMyOTguODExLDM1Ny40NzksMjk0LjQwNSwzNTQuNDAxLDI5MC4yNDUsMzU1LjkyNHoiLz4KPC9nPgo8cGF0aCBzdHlsZT0iZmlsbDojMzMzMzMzOyIgZD0iTTI5MC4yNDUsMzU1LjkyNGwtMjQuMDYxLDguODE0Yy0wLjM5OC0xLjI0NS0xLjU1Mi0yLjE1MS0yLjkyOS0yLjE1MWgtNi45Njh2MjkuMDQxaDYuOTY4ICBjMS4zNzcsMCwyLjUyOS0wLjkwNywyLjkyOS0yLjE1MWwyNC4wNjEsOC44MTRjNC4xNiwxLjUyNCw4LjU2Ni0xLjU1NSw4LjU2Ni01Ljk4NVYzNjEuOTEgIEMyOTguODExLDM1Ny40NzksMjk0LjQwNSwzNTQuNDAxLDI5MC4yNDUsMzU1LjkyNHoiLz4KPGc+Cgk8Y2lyY2xlIHN0eWxlPSJmaWxsOiNBREFEQUQ7IiBjeD0iMjU2IiBjeT0iNDEwLjI5IiByPSI0LjMxIi8+Cgk8Y2lyY2xlIHN0eWxlPSJmaWxsOiNBREFEQUQ7IiBjeD0iMjU2IiBjeT0iNDMzLjEzMSIgcj0iNC4zMSIvPgoJPGNpcmNsZSBzdHlsZT0iZmlsbDojQURBREFEOyIgY3g9IjI1NiIgY3k9IjQ1NS45NzMiIHI9IjQuMzEiLz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K" })),
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "header" }, "Elliot Fu"),
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "description" }, "Elliot Fu is a film-maker from New York. ghgfhg hgfghhg hgghfhgfghf")),
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Button"].Group, null,
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Button"], null, "+ Connect"),
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Button"].Or, null),
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Button"], null, "Message"))),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "ui card" },
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "middle aligned content uk-text-center" },
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", { className: "ui tiny image cirlce center aligned", href: "#" },
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("img", { className: "circle", 
                                    // tslint:disable-next-line:max-line-length
                                    src: "data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4Ij4KPGNpcmNsZSBzdHlsZT0iZmlsbDojNzFFMkVGOyIgY3g9IjI1NiIgY3k9IjI1NiIgcj0iMjU2Ii8+CjxwYXRoIHN0eWxlPSJmaWxsOiMzOEM2RDk7IiBkPSJNMjI1LjcyNiw0MzkuNTQ2bDY5LjQ2OCw2OS40NjhDNDE3Ljk3NSw0OTAuMTUxLDUxMiwzODQuMDU3LDUxMiwyNTYgIGMwLTAuNjgxLTAuMDIxLTEuMzU4LTAuMDI2LTIuMDM4TDM1OC44NiwxMDAuODQ4TDIyNS43MjYsNDM5LjU0NnoiLz4KPHJlY3QgeD0iMjEzLjMzMyIgeT0iMjkyLjIxOSIgc3R5bGU9ImZpbGw6I0ZDRDA4ODsiIHdpZHRoPSI4NS4zMzMiIGhlaWdodD0iODUuMzMzIi8+CjxyZWN0IHg9IjI1Ni4yOTMiIHk9IjI5Mi4yMTkiIHN0eWxlPSJmaWxsOiNEREFCNjI7IiB3aWR0aD0iNDIuMzc5IiBoZWlnaHQ9Ijg1LjMzMyIvPgo8cGF0aCBzdHlsZT0iZmlsbDojRDlFREVDOyIgZD0iTTM1Ny43NjQsMzYwLjVsLTQ1LjIyLTkuMDQ0bC03Ljk5Mi0xMS42NjZjLTEuNDk2LTIuMTg0LTQuMzI3LTMuMDA3LTYuNzU5LTEuOTY1TDI1NiwzNTUuODMgIGwtNDEuNTQzLTE3Ljk4N2MtMi40MTUtMS4wNTMtNS4yMzktMC4yNjItNi43NTQsMS44OTNsLTguMjQ3LDExLjcxOWwtNDUuMjIsOS4wNDRjLTIzLjAyNCw0LjYwNi0zOS41OTYsMjQuODIxLTM5LjU5Niw0OC4zdjYwLjY0NyAgQzE1NS4xNDgsNDk2LjMyOCwyMDMuNzQsNTEyLDI1Niw1MTJzMTAwLjg1Mi0xNS42NzIsMTQxLjM2LTQyLjU1NXYtNjAuNjQ3QzM5Ny4zNiwzODUuMzE5LDM4MC43ODcsMzY1LjEwNCwzNTcuNzY0LDM2MC41eiIvPgo8cGF0aCBzdHlsZT0iZmlsbDojQzdEOEQ3OyIgZD0iTTM5Ny4zNiw0MDguNzk4YzAtMjMuNDgtMTYuNTc0LTQzLjY5Ni0zOS41OTYtNDguM2wtNDUuMjItOS4wNDRsLTcuOTkyLTExLjY2NiAgYy0xLjQ5Ni0yLjE4NC00LjMyNy0zLjAwNy02Ljc1OS0xLjk2NWwtNDEuNTAzLDE3Ljg4djE1Ni4yODljNTIuMTQ4LTAuMDU3LDEwMC42MzgtMTUuNzE3LDE0MS4wNzItNDIuNTQ5di02MC42NDVIMzk3LjM2eiIvPgo8cGF0aCBzdHlsZT0iZmlsbDojRkZFREI1OyIgZD0iTTM0Ny41MzEsMjA1LjQ0YzAuNDU5LTQuMjQ0LDAuNjk4LTguNDI4LDAuNjk4LTEyLjUwOWMwLTUzLjk3NC00MS4yOTMtOTcuNzI4LTkyLjIyOS05Ny43MjggIHMtOTIuMjI5LDQzLjc1My05Mi4yMjksOTcuNzI4YzAsNC4wOCwwLjI0LDguMjY0LDAuNjk4LDEyLjUwOWMtOC45NDUsMi4zMjYtMTMuMjAyLDE2LjA4Ny05LjUwNiwzMC44MTcgIGMzLjcwOCwxNC43NzYsMTQuMDE0LDI0LjkyMSwyMy4wMTgsMjIuNjYxYzAuODIxLTAuMjA1LDEuNTg2LTAuNTM4LDIuMzI2LTAuOTI3YzE2LjY2NywzMy40NTIsNDQuMzUxLDYwLjU5NCw3NS42OTMsNjAuNTk0ICBzNTkuMDI3LTI3LjEzOSw3NS42OTMtNjAuNTk0YzAuNzQsMC4zOSwxLjUwNSwwLjcyMiwyLjMyNiwwLjkyN2M5LjAwNCwyLjI2LDE5LjMwOS03Ljg4NSwyMy4wMTgtMjIuNjYxICBDMzYwLjczMiwyMjEuNTI3LDM1Ni40NzYsMjA3Ljc2MywzNDcuNTMxLDIwNS40NHoiLz4KPHBhdGggc3R5bGU9ImZpbGw6I0U4Q0Y4OTsiIGQ9Ik0zNDcuNTMxLDIwNS40NGMwLjQ1OS00LjI0NCwwLjY5OC04LjQyOCwwLjY5OC0xMi41MDljMC01My44NzItNDEuMTM4LTk3LjU1Ni05MS45NDEtOTcuNzIxdjIyMy4zNjUgIGMzMS4yMjMtMC4xNjcsNTguNzktMjcuMjM2LDc1LjQwNS02MC41ODVjMC43NCwwLjM5LDEuNTA1LDAuNzIyLDIuMzI2LDAuOTI3YzkuMDA0LDIuMjYsMTkuMzA5LTcuODg1LDIzLjAxOC0yMi42NjEgIEMzNjAuNzMyLDIyMS41MjcsMzU2LjQ3NiwyMDcuNzYzLDM0Ny41MzEsMjA1LjQ0eiIvPgo8cGF0aCBzdHlsZT0iZmlsbDojNDk0OTQ4OyIgZD0iTTIwNC4xNCwxNzAuNjY3YzAsMCw0MC4wODEsMzguMzU3LDEyMS45NjYsMjQuNTY2YzAsMCw3Ljk0LTEuOTk4LDIxLjQyNSwxMC4yMDcgIGMwLDAsMjQuNjkxLTUxLjU4MSwxMS4zMzEtMTA0LjU5MWMwLDAtNDMuNTI5LDUuNjAzLTYyLjkyMy02LjQ2NWMtMTkuMzk0LTEyLjA2Ny03MS4xMTEtMjQuOTk3LTgyLjc0NywxMS4yMDUgIGMwLDAtMzcuNDk1LTQuNzQxLTQ3LjgzOCwzNC4wNDdjLTEwLjM0MywzOC43ODgtMC44ODMsNjUuODAzLTAuODgzLDY1LjgwM1MxODMuODg0LDE1OC41OTksMjA0LjE0LDE3MC42Njd6Ii8+CjxnPgoJPHBhdGggc3R5bGU9ImZpbGw6IzMzMzMzMzsiIGQ9Ik0zNTguODYsMTAwLjg0OGMwLDAtNDMuNTI5LDUuNjAzLTYyLjkyMy02LjQ2NWMtOC44MDktNS40ODItMjQuMjg4LTExLjEyNC0zOS42NS0xMi4yNzZ2MTEyLjUwOSAgIGMxOC4zNTgsMy45MjcsNDEuNjA1LDUuMzY4LDY5LjgxOCwwLjYxNWMwLDAsNy45NC0xLjk5OCwyMS40MjUsMTAuMjA3QzM0Ny41MzEsMjA1LjQ0LDM3Mi4yMjEsMTUzLjg1OSwzNTguODYsMTAwLjg0OHoiLz4KCTxwYXRoIHN0eWxlPSJmaWxsOiMzMzMzMzM7IiBkPSJNMjY3LjkxLDUxMS42OTdjMzAuNDg0LTEuMzk4LDU5LjU2NC04LjEzNSw4Ni4zNTQtMTkuMjg3VjM1OS44bC0zNC45MDctNi45ODJMMjY3LjkxLDUxMS42OTd6Ii8+CjwvZz4KPGc+Cgk8cGF0aCBzdHlsZT0iZmlsbDojNDk0OTQ4OyIgZD0iTTI0NC4wOSw1MTEuNjk3Yy0zMC40ODQtMS4zOTgtNTkuNTY0LTguMTM1LTg2LjM1NC0xOS4yODdWMzU5LjhsMzQuOTA3LTYuOTgyTDI0NC4wOSw1MTEuNjk3eiIvPgoJPHBhdGggc3R5bGU9ImZpbGw6IzQ5NDk0ODsiIGQ9Ik0yOTAuMjQ1LDM1NS45MjRsLTI0LjA2MSw4LjgxNGMtMC4zOTgtMS4yNDUtMS41NTItMi4xNTEtMi45MjktMi4xNTFoLTEzLjY0OCAgIGMtMS4zNywwLTIuNTIsMC45LTIuOTI0LDIuMTM2bC0yNC4wMTctOC43OTljLTQuMTYtMS41MjQtOC41NjYsMS41NTUtOC41NjYsNS45ODV2MzAuMzk2YzAsNC40MjksNC40MDYsNy41MDksOC41NjYsNS45ODUgICBsMjQuMDE3LTguNzk5YzAuNDAzLDEuMjM2LDEuNTUyLDIuMTM2LDIuOTI0LDIuMTM2aDEzLjY0OGMxLjM3NywwLDIuNTI5LTAuOTA3LDIuOTI5LTIuMTUxbDI0LjA2MSw4LjgxNCAgIGM0LjE2LDEuNTI0LDguNTY2LTEuNTU1LDguNTY2LTUuOTg1VjM2MS45MUMyOTguODExLDM1Ny40NzksMjk0LjQwNSwzNTQuNDAxLDI5MC4yNDUsMzU1LjkyNHoiLz4KPC9nPgo8cGF0aCBzdHlsZT0iZmlsbDojMzMzMzMzOyIgZD0iTTI5MC4yNDUsMzU1LjkyNGwtMjQuMDYxLDguODE0Yy0wLjM5OC0xLjI0NS0xLjU1Mi0yLjE1MS0yLjkyOS0yLjE1MWgtNi45Njh2MjkuMDQxaDYuOTY4ICBjMS4zNzcsMCwyLjUyOS0wLjkwNywyLjkyOS0yLjE1MWwyNC4wNjEsOC44MTRjNC4xNiwxLjUyNCw4LjU2Ni0xLjU1NSw4LjU2Ni01Ljk4NVYzNjEuOTEgIEMyOTguODExLDM1Ny40NzksMjk0LjQwNSwzNTQuNDAxLDI5MC4yNDUsMzU1LjkyNHoiLz4KPGc+Cgk8Y2lyY2xlIHN0eWxlPSJmaWxsOiNBREFEQUQ7IiBjeD0iMjU2IiBjeT0iNDEwLjI5IiByPSI0LjMxIi8+Cgk8Y2lyY2xlIHN0eWxlPSJmaWxsOiNBREFEQUQ7IiBjeD0iMjU2IiBjeT0iNDMzLjEzMSIgcj0iNC4zMSIvPgoJPGNpcmNsZSBzdHlsZT0iZmlsbDojQURBREFEOyIgY3g9IjI1NiIgY3k9IjQ1NS45NzMiIHI9IjQuMzEiLz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K" })),
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "header" }, "Elliot Fu"),
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "description" }, "Elliot Fu is a film-maker from New York. ghgfhg hgfghhg hgghfhgfghf")),
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Button"].Group, null,
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Button"], null, "+ Connect"),
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Button"].Or, null),
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Button"], null, "Message"))),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "ui card" },
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "middle aligned content uk-text-center" },
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", { className: "ui tiny image cirlce center aligned", href: "#" },
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("img", { className: "circle", 
                                    // tslint:disable-next-line:max-line-length
                                    src: "data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4Ij4KPGNpcmNsZSBzdHlsZT0iZmlsbDojNzFFMkVGOyIgY3g9IjI1NiIgY3k9IjI1NiIgcj0iMjU2Ii8+CjxwYXRoIHN0eWxlPSJmaWxsOiMzOEM2RDk7IiBkPSJNMjI1LjcyNiw0MzkuNTQ2bDY5LjQ2OCw2OS40NjhDNDE3Ljk3NSw0OTAuMTUxLDUxMiwzODQuMDU3LDUxMiwyNTYgIGMwLTAuNjgxLTAuMDIxLTEuMzU4LTAuMDI2LTIuMDM4TDM1OC44NiwxMDAuODQ4TDIyNS43MjYsNDM5LjU0NnoiLz4KPHJlY3QgeD0iMjEzLjMzMyIgeT0iMjkyLjIxOSIgc3R5bGU9ImZpbGw6I0ZDRDA4ODsiIHdpZHRoPSI4NS4zMzMiIGhlaWdodD0iODUuMzMzIi8+CjxyZWN0IHg9IjI1Ni4yOTMiIHk9IjI5Mi4yMTkiIHN0eWxlPSJmaWxsOiNEREFCNjI7IiB3aWR0aD0iNDIuMzc5IiBoZWlnaHQ9Ijg1LjMzMyIvPgo8cGF0aCBzdHlsZT0iZmlsbDojRDlFREVDOyIgZD0iTTM1Ny43NjQsMzYwLjVsLTQ1LjIyLTkuMDQ0bC03Ljk5Mi0xMS42NjZjLTEuNDk2LTIuMTg0LTQuMzI3LTMuMDA3LTYuNzU5LTEuOTY1TDI1NiwzNTUuODMgIGwtNDEuNTQzLTE3Ljk4N2MtMi40MTUtMS4wNTMtNS4yMzktMC4yNjItNi43NTQsMS44OTNsLTguMjQ3LDExLjcxOWwtNDUuMjIsOS4wNDRjLTIzLjAyNCw0LjYwNi0zOS41OTYsMjQuODIxLTM5LjU5Niw0OC4zdjYwLjY0NyAgQzE1NS4xNDgsNDk2LjMyOCwyMDMuNzQsNTEyLDI1Niw1MTJzMTAwLjg1Mi0xNS42NzIsMTQxLjM2LTQyLjU1NXYtNjAuNjQ3QzM5Ny4zNiwzODUuMzE5LDM4MC43ODcsMzY1LjEwNCwzNTcuNzY0LDM2MC41eiIvPgo8cGF0aCBzdHlsZT0iZmlsbDojQzdEOEQ3OyIgZD0iTTM5Ny4zNiw0MDguNzk4YzAtMjMuNDgtMTYuNTc0LTQzLjY5Ni0zOS41OTYtNDguM2wtNDUuMjItOS4wNDRsLTcuOTkyLTExLjY2NiAgYy0xLjQ5Ni0yLjE4NC00LjMyNy0zLjAwNy02Ljc1OS0xLjk2NWwtNDEuNTAzLDE3Ljg4djE1Ni4yODljNTIuMTQ4LTAuMDU3LDEwMC42MzgtMTUuNzE3LDE0MS4wNzItNDIuNTQ5di02MC42NDVIMzk3LjM2eiIvPgo8cGF0aCBzdHlsZT0iZmlsbDojRkZFREI1OyIgZD0iTTM0Ny41MzEsMjA1LjQ0YzAuNDU5LTQuMjQ0LDAuNjk4LTguNDI4LDAuNjk4LTEyLjUwOWMwLTUzLjk3NC00MS4yOTMtOTcuNzI4LTkyLjIyOS05Ny43MjggIHMtOTIuMjI5LDQzLjc1My05Mi4yMjksOTcuNzI4YzAsNC4wOCwwLjI0LDguMjY0LDAuNjk4LDEyLjUwOWMtOC45NDUsMi4zMjYtMTMuMjAyLDE2LjA4Ny05LjUwNiwzMC44MTcgIGMzLjcwOCwxNC43NzYsMTQuMDE0LDI0LjkyMSwyMy4wMTgsMjIuNjYxYzAuODIxLTAuMjA1LDEuNTg2LTAuNTM4LDIuMzI2LTAuOTI3YzE2LjY2NywzMy40NTIsNDQuMzUxLDYwLjU5NCw3NS42OTMsNjAuNTk0ICBzNTkuMDI3LTI3LjEzOSw3NS42OTMtNjAuNTk0YzAuNzQsMC4zOSwxLjUwNSwwLjcyMiwyLjMyNiwwLjkyN2M5LjAwNCwyLjI2LDE5LjMwOS03Ljg4NSwyMy4wMTgtMjIuNjYxICBDMzYwLjczMiwyMjEuNTI3LDM1Ni40NzYsMjA3Ljc2MywzNDcuNTMxLDIwNS40NHoiLz4KPHBhdGggc3R5bGU9ImZpbGw6I0U4Q0Y4OTsiIGQ9Ik0zNDcuNTMxLDIwNS40NGMwLjQ1OS00LjI0NCwwLjY5OC04LjQyOCwwLjY5OC0xMi41MDljMC01My44NzItNDEuMTM4LTk3LjU1Ni05MS45NDEtOTcuNzIxdjIyMy4zNjUgIGMzMS4yMjMtMC4xNjcsNTguNzktMjcuMjM2LDc1LjQwNS02MC41ODVjMC43NCwwLjM5LDEuNTA1LDAuNzIyLDIuMzI2LDAuOTI3YzkuMDA0LDIuMjYsMTkuMzA5LTcuODg1LDIzLjAxOC0yMi42NjEgIEMzNjAuNzMyLDIyMS41MjcsMzU2LjQ3NiwyMDcuNzYzLDM0Ny41MzEsMjA1LjQ0eiIvPgo8cGF0aCBzdHlsZT0iZmlsbDojNDk0OTQ4OyIgZD0iTTIwNC4xNCwxNzAuNjY3YzAsMCw0MC4wODEsMzguMzU3LDEyMS45NjYsMjQuNTY2YzAsMCw3Ljk0LTEuOTk4LDIxLjQyNSwxMC4yMDcgIGMwLDAsMjQuNjkxLTUxLjU4MSwxMS4zMzEtMTA0LjU5MWMwLDAtNDMuNTI5LDUuNjAzLTYyLjkyMy02LjQ2NWMtMTkuMzk0LTEyLjA2Ny03MS4xMTEtMjQuOTk3LTgyLjc0NywxMS4yMDUgIGMwLDAtMzcuNDk1LTQuNzQxLTQ3LjgzOCwzNC4wNDdjLTEwLjM0MywzOC43ODgtMC44ODMsNjUuODAzLTAuODgzLDY1LjgwM1MxODMuODg0LDE1OC41OTksMjA0LjE0LDE3MC42Njd6Ii8+CjxnPgoJPHBhdGggc3R5bGU9ImZpbGw6IzMzMzMzMzsiIGQ9Ik0zNTguODYsMTAwLjg0OGMwLDAtNDMuNTI5LDUuNjAzLTYyLjkyMy02LjQ2NWMtOC44MDktNS40ODItMjQuMjg4LTExLjEyNC0zOS42NS0xMi4yNzZ2MTEyLjUwOSAgIGMxOC4zNTgsMy45MjcsNDEuNjA1LDUuMzY4LDY5LjgxOCwwLjYxNWMwLDAsNy45NC0xLjk5OCwyMS40MjUsMTAuMjA3QzM0Ny41MzEsMjA1LjQ0LDM3Mi4yMjEsMTUzLjg1OSwzNTguODYsMTAwLjg0OHoiLz4KCTxwYXRoIHN0eWxlPSJmaWxsOiMzMzMzMzM7IiBkPSJNMjY3LjkxLDUxMS42OTdjMzAuNDg0LTEuMzk4LDU5LjU2NC04LjEzNSw4Ni4zNTQtMTkuMjg3VjM1OS44bC0zNC45MDctNi45ODJMMjY3LjkxLDUxMS42OTd6Ii8+CjwvZz4KPGc+Cgk8cGF0aCBzdHlsZT0iZmlsbDojNDk0OTQ4OyIgZD0iTTI0NC4wOSw1MTEuNjk3Yy0zMC40ODQtMS4zOTgtNTkuNTY0LTguMTM1LTg2LjM1NC0xOS4yODdWMzU5LjhsMzQuOTA3LTYuOTgyTDI0NC4wOSw1MTEuNjk3eiIvPgoJPHBhdGggc3R5bGU9ImZpbGw6IzQ5NDk0ODsiIGQ9Ik0yOTAuMjQ1LDM1NS45MjRsLTI0LjA2MSw4LjgxNGMtMC4zOTgtMS4yNDUtMS41NTItMi4xNTEtMi45MjktMi4xNTFoLTEzLjY0OCAgIGMtMS4zNywwLTIuNTIsMC45LTIuOTI0LDIuMTM2bC0yNC4wMTctOC43OTljLTQuMTYtMS41MjQtOC41NjYsMS41NTUtOC41NjYsNS45ODV2MzAuMzk2YzAsNC40MjksNC40MDYsNy41MDksOC41NjYsNS45ODUgICBsMjQuMDE3LTguNzk5YzAuNDAzLDEuMjM2LDEuNTUyLDIuMTM2LDIuOTI0LDIuMTM2aDEzLjY0OGMxLjM3NywwLDIuNTI5LTAuOTA3LDIuOTI5LTIuMTUxbDI0LjA2MSw4LjgxNCAgIGM0LjE2LDEuNTI0LDguNTY2LTEuNTU1LDguNTY2LTUuOTg1VjM2MS45MUMyOTguODExLDM1Ny40NzksMjk0LjQwNSwzNTQuNDAxLDI5MC4yNDUsMzU1LjkyNHoiLz4KPC9nPgo8cGF0aCBzdHlsZT0iZmlsbDojMzMzMzMzOyIgZD0iTTI5MC4yNDUsMzU1LjkyNGwtMjQuMDYxLDguODE0Yy0wLjM5OC0xLjI0NS0xLjU1Mi0yLjE1MS0yLjkyOS0yLjE1MWgtNi45Njh2MjkuMDQxaDYuOTY4ICBjMS4zNzcsMCwyLjUyOS0wLjkwNywyLjkyOS0yLjE1MWwyNC4wNjEsOC44MTRjNC4xNiwxLjUyNCw4LjU2Ni0xLjU1NSw4LjU2Ni01Ljk4NVYzNjEuOTEgIEMyOTguODExLDM1Ny40NzksMjk0LjQwNSwzNTQuNDAxLDI5MC4yNDUsMzU1LjkyNHoiLz4KPGc+Cgk8Y2lyY2xlIHN0eWxlPSJmaWxsOiNBREFEQUQ7IiBjeD0iMjU2IiBjeT0iNDEwLjI5IiByPSI0LjMxIi8+Cgk8Y2lyY2xlIHN0eWxlPSJmaWxsOiNBREFEQUQ7IiBjeD0iMjU2IiBjeT0iNDMzLjEzMSIgcj0iNC4zMSIvPgoJPGNpcmNsZSBzdHlsZT0iZmlsbDojQURBREFEOyIgY3g9IjI1NiIgY3k9IjQ1NS45NzMiIHI9IjQuMzEiLz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K" })),
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "header" }, "Elliot Fu"),
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "description" }, "Elliot Fu is a film-maker from New York. ghgfhg hgfghhg hgghfhgfghf")),
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Button"].Group, null,
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Button"], null, "+ Connect"),
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Button"].Or, null),
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Button"], null, "Message")))))));
    }
}
/* harmony export (immutable) */ __webpack_exports__["default"] = Connection;

/*

            <div className="ui items divided ">
              <div className="item">
                <a className="ui tiny image">
                  
                  <img
                    // tslint:disable-next-line:max-line-length
                 </a>
                <div className="middle aligned content">
                  <a className="header">Stevie Feliciano</a>
                  <div className="description">
                    <p>Stevie Feliciano is a living in New York City.
                    She likes to spend her time reading, running, and writing.</p>
                  </div>
                </div>
                <div className="center middle aligned content">
                  <button className="ui button center aligned">Support</button>
                </div>
              </div>
              <div className="item">
                <a className="ui tiny image">
                  
                  <img
                    // tslint:disable-next-line:max-line-length
                   </a>
                <div className="middle aligned content">
                  <a className="header">Stevie Feliciano</a>
                  <div className="description">
                    <p>Stevie Feliciano is a living in New York City.
                    She likes to spend her time reading, running, and writing.</p>
                  </div>
                </div>
                <div className="center aligned content">
                <FollowButton liked={false} />
                </div>
              </div>
              <div className="item">
                <a className="ui tiny image">
                  
                  <img
                    // tslint:disable-next-line:max-line-length
                  </a>
                <div className="middle aligned content">
                  <a className="header">Stevie Feliciano</a>
                  <div className="description">
                    <p>Stevie Feliciano is a living in New York City.
                    She likes to spend her time reading, running, and writing.</p>
                  </div>
                </div>
                <div className="center aligned content">
                <FollowButton liked={false} />
                </div>
              </div>
              <div className="item">
                <a className="ui tiny image">
                  
                  <img
                    // tslint:disable-next-line:max-line-length
                    src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZ
                    GluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTV
                    kcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dH
                    A6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgd
                    mVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzd
                    HlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9I
                    jUxMnB4IiBoZWlnaHQ9IjUxMnB4Ij4KPGNpcmNsZSBzdHlsZT0iZmlsbDojNzFFMkVGOyIgY3g9IjI1NiIgY3k9I
                    jI1NiIgcj0iMjU2Ii8+CjxwYXRoIHN0eWxlPSJmaWxsOiMzOEM2RDk7IiBkPSJNMjI1LjcyNiw0MzkuNTQ2bDY5LjQ2
                    OCw2OS40NjhDNDE3Ljk3NSw0OTAuMTUxLDUxMiwzODQuMDU3LDUxMiwyNTYgIGMwLTAuNjgxLTAuMDIxLTEuMzU4LT
                    AuMDI2LTIuMDM4TDM1OC44NiwxMDAuODQ4TDIyNS43MjYsNDM5LjU0NnoiLz4KPHJlY3QgeD0iMjEzLjMzMyIgeT0iM
                    jkyLjIxOSIgc3R5bGU9ImZpbGw6I0ZDRDA4ODsiIHdpZHRoPSI4NS4zMzMiIGhlaWdodD0iODUuMzMzIi8+CjxyZWN0
                    IHg9IjI1Ni4yOTMiIHk9IjI5Mi4yMTkiIHN0eWxlPSJmaWxsOiNEREFCNjI7IiB3aWR0aD0iNDIuMzc5IiBoZWlnaHQ
                    9Ijg1LjMzMyIvPgo8cGF0aCBzdHlsZT0iZmlsbDojRDlFREVDOyIgZD0iTTM1Ny43NjQsMzYwLjVsLTQ1LjIyLTkuMD
                    Q0bC03Ljk5Mi0xMS42NjZjLTEuNDk2LTIuMTg0LTQuMzI3LTMuMDA3LTYuNzU5LTEuOTY1TDI1NiwzNTUuODMgIGwtND
                    EuNTQzLTE3Ljk4N2MtMi40MTUtMS4wNTMtNS4yMzktMC4yNjItNi43NTQsMS44OTNsLTguMjQ3LDExLjcxOWwtNDUuMj
                    IsOS4wNDRjLTIzLjAyNCw0LjYwNi0zOS41OTYsMjQuODIxLTM5LjU5Niw0OC4zdjYwLjY0NyAgQzE1NS4xNDgsNDk2Lj
                    MyOCwyMDMuNzQsNTEyLDI1Niw1MTJzMTAwLjg1Mi0xNS42NzIsMTQxLjM2LTQyLjU1NXYtNjAuNjQ3QzM5Ny4zNiwzOD
                    UuMzE5LDM4MC43ODcsMzY1LjEwNCwzNTcuNzY0LDM2MC41eiIvPgo8cGF0aCBzdHlsZT0iZmlsbDojQzdEOEQ3OyIgZD0
                    iTTM5Ny4zNiw0MDguNzk4YzAtMjMuNDgtMTYuNTc0LTQzLjY5Ni0zOS41OTYtNDguM2wtNDUuMjItOS4wNDRsLTcuOTky
                    </a>
                <div className="middle aligned content">
                  <a className="header">Stevie Feliciano</a>
                  <div className="description">
                    <p>Stevie Feliciano is a living in New York City.
                    She likes to spend her time reading, running, and writing.</p>
                  </div>
                </div>
                <div className="center aligned content">
                <FollowButton liked={false} />
                </div>
              </div>
            </div>*/ 


/***/ }),

/***/ "./src/Containers/Forum/index.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom__ = __webpack_require__("react-router-dom");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_helmet__ = __webpack_require__("react-helmet");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_helmet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_helmet__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_async_component__ = __webpack_require__("react-async-component");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_async_component___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_async_component__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_Components_EmptyStates__ = __webpack_require__("./src/Components/EmptyStates/index.tsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_anchor_ui_theme_provider__ = __webpack_require__("anchor-ui/theme-provider");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_anchor_ui_theme_provider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_anchor_ui_theme_provider__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_anchor_ui_search_box__ = __webpack_require__("anchor-ui/search-box");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_anchor_ui_search_box___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_anchor_ui_search_box__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_anchor_ui_list__ = __webpack_require__("anchor-ui/list");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_anchor_ui_list___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_anchor_ui_list__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_anchor_ui_list_item__ = __webpack_require__("anchor-ui/list-item");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_anchor_ui_list_item___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_anchor_ui_list_item__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_anchor_ui_channel_header__ = __webpack_require__("anchor-ui/channel-header");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_anchor_ui_channel_header___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_anchor_ui_channel_header__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_anchor_ui_button__ = __webpack_require__("anchor-ui/button");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_anchor_ui_button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_anchor_ui_button__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_anchor_ui_icons_icon_people__ = __webpack_require__("anchor-ui/icons/icon-people");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_anchor_ui_icons_icon_people___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_anchor_ui_icons_icon_people__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_anchor_ui_modal__ = __webpack_require__("anchor-ui/modal");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_anchor_ui_modal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_anchor_ui_modal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_anchor_ui_icons_icon_add_friend__ = __webpack_require__("anchor-ui/icons/icon-add-friend");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_anchor_ui_icons_icon_add_friend___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_anchor_ui_icons_icon_add_friend__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_react_apollo__ = __webpack_require__("react-apollo");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_react_apollo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_react_apollo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__style_css__ = __webpack_require__("./src/Containers/Forum/style.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15__style_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_Graphql_Mutation__ = __webpack_require__("./src/Graphql/Mutation/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_Graphql_Query__ = __webpack_require__("./src/Graphql/Query/index.ts");


















const ChatDetail = Object(__WEBPACK_IMPORTED_MODULE_3_react_async_component__["asyncComponent"])({
    resolve: () => new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, "./src/Containers/ChatDetail/index.tsx")),
    LoadingComponent: () => __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4_Components_EmptyStates__["b" /* LoadingComponent */], null),
    ErrorComponent: ({ error }) => __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", null, error.message) // Optional
});
const items = [{
        primaryText: 'Rex Raphael',
        secondaryText: 'Been long brava',
        image: 'http://www.ghgh.gh/hjh.png'
    }, {
        primaryText: 'Rex Raphael',
        secondaryText: 'Been long brava',
        image: 'http://www.ghgh.gh/hjh.png'
    }, {
        primaryText: 'Rex Raphael',
        secondaryText: 'Been long brava',
        image: 'http://www.ghgh.gh/hjh.png'
    }, {
        primaryText: 'Rex Raphael',
        secondaryText: 'Been long brava',
        image: 'http://www.ghgh.gh/hjh.png'
    }, {
        primaryText: 'Rex Raphael',
        secondaryText: 'Been long brava',
        image: 'http://www.ghgh.gh/hjh.png'
    }, {
        primaryText: 'Rex Raphael',
        secondaryText: 'Been long brava',
        image: 'http://www.ghgh.gh/hjh.png'
    }, {
        primaryText: 'Rex Raphael',
        secondaryText: 'Been long brava',
        image: 'http://www.ghgh.gh/hjh.png'
    }];
class Forum extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
    constructor() {
        super(...arguments);
        this.state = {
            channelId: '',
            text: '',
            currentChannel: {},
            open: false
        };
    }
    openModal() {
        const value = !this.state.open;
        this.setState({ open: value });
    }
    renderContent() {
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { style: { height: '91vh', width: '100vw' }, className: "uk-width-1-1 uk-flex" },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { id: "chat-list", className: "uk-width-1-4 un-border-right", style: { backgroundColor: '#ffffff' } },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_6_anchor_ui_search_box___default.a, { placeholder: "Search for channels and chat" }),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_7_anchor_ui_list___default.a, { id: "chat-list", header: "Channels", style: { height: '43.1vh' } }, this.props.channels.getAllChat ? this.props.channels.getAllChat.map((item, index) => (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_8_anchor_ui_list_item___default.a, { key: index, primaryText: item.primaryText, avatar: item.image }))) : __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-padding-small" }, "Empty channel conversation")),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_7_anchor_ui_list___default.a, { id: "chat-list", header: "Direct Chat", style: { height: '40vh' } }, this.props.channels.getAllChat ? this.props.channels.getAllChat.map((item, index) => (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_8_anchor_ui_list_item___default.a, { key: index, primaryText: item.primaryText, secondaryText: item.secondaryText, avatar: item.image }))) : __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-padding-small" }, "Empty Direct Chat"))),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-width-expand" },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_9_anchor_ui_channel_header___default.a, { name: "Channel", rightButton: __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-flex" },
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_10_anchor_ui_button___default.a, { iconButton: true },
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_11_anchor_ui_icons_icon_people___default.a, null))), leftButton: 
                    // tslint:disable-next-line:jsx-boolean-value
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_10_anchor_ui_button___default.a, { iconButton: true, onClick: () => this.openModal() },
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_13_anchor_ui_icons_icon_add_friend___default.a, null)), style: { backgroundColor: '#454d5d' } }),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-width-1-1 uk-flex", style: {} },
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](ChatDetail, null))),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_12_anchor_ui_modal___default.a, { open: this.state.open, color: "grey", actions: __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-flex uk-flex-between" },
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("button", { className: "uk-button uk-button-small uk-button-default", onClick: () => this.openModal() }, "Close"),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("button", { className: "uk-button uk-button-small uk-button-primary" }, "Create")) },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", null,
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("input", { placeholder: "Channel name", className: "uk-input" })))));
    }
    renderLoading() {
        return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", null, "Loading");
    }
    render() {
        console.log(this.props.channels);
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_5_anchor_ui_theme_provider___default.a, { color: "#f2912c" },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "App" },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_react_helmet__["Helmet"], null,
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("title", null, "Unizonn | Lounge"),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("meta", { name: "an inclusive community", content: "Unizonn community" })),
                this.props.channels.Loading ? this.renderLoading() : this.renderContent())));
    }
}
/* harmony default export */ __webpack_exports__["default"] = (Object(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["withRouter"])(Object(__WEBPACK_IMPORTED_MODULE_14_react_apollo__["compose"])(__WEBPACK_IMPORTED_MODULE_14_react_apollo__["withApollo"], Object(__WEBPACK_IMPORTED_MODULE_14_react_apollo__["graphql"])(__WEBPACK_IMPORTED_MODULE_17_Graphql_Query__["f" /* GET_ALL_MY_CHANNEL */], {
    name: 'channels',
}), Object(__WEBPACK_IMPORTED_MODULE_14_react_apollo__["graphql"])(__WEBPACK_IMPORTED_MODULE_16_Graphql_Mutation__["d" /* CREATE_MESSAGE */], { name: 'sendMessage' }))(Forum)));
/*
Modal.propTypes = {
  actions: _propTypes2.default.node.isRequired,
  /** Override the style of the root element *
  style: _propTypes2.default.object, // eslint-disable-line react/forbid-prop-types
  /** Override the style of the content element *
  contentStyle: _propTypes2.default.object, // eslint-disable-line react/forbid-prop-types
  /** Override the style of the footer element *
  footerStyle: _propTypes2.default.object, // eslint-disable-line react/forbid-prop-types
  /** Override the styles of the overlay element *
  overlayStyle: _propTypes2.default.object, // eslint-disable-line react/forbid-prop-types
  color: _propTypes2.default.string.isRequired
};
*/ 


/***/ }),

/***/ "./src/Containers/Forum/style.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(undefined);
// imports


// module
exports.push([module.i, ".input-box {\n  background-color: ivory;\n  bottom: 0;\n  width: 75vw;\n  position: fixed;\n  margin: auto; }\n\n.raised {\n  box-shadow: 0px 5px 3px -6px rgba(119, 119, 119, 0.8);\n  -webkit-box-shadow: 0px 5px 3px -6px rgba(119, 119, 119, 0.8);\n  -moz-box-shadow: 0px 5px 3px -6px rgba(119, 119, 119, 0.8); }\n\n.un-border-bottom {\n  border-bottom: 1px solid #868686;\n  box-shadow: 0px 5px 3px -3px rgba(119, 119, 119, 0.7);\n  -webkit-box-shadow: 0px 5px 3px -3px rgba(119, 119, 119, 0.7);\n  -moz-box-shadow: 0px 5px 3px -3px rgba(119, 119, 119, 0.7); }\n\n.un-border-right {\n  border-right: 1px solid #868686;\n  box-shadow: 5px 0px 3px -3px rgba(119, 119, 119, 0.8);\n  -webkit-box-shadow: 5px 0px 3px -3px rgba(119, 119, 119, 0.8);\n  -moz-box-shadow: 5px 0px 3px -3px rgba(119, 119, 119, 0.8); }\n\n.un-border-left {\n  border-left: 1px solid #868686;\n  box-shadow: -5px 0px 3px -3px rgba(119, 119, 119, 0.8);\n  -webkit-box-shadow: -5px 0px 3px -3px rgba(119, 119, 119, 0.8);\n  -moz-box-shadow: -5px 0px 3px -3px rgba(119, 119, 119, 0.8); }\n", ""]);

// exports


/***/ }),

/***/ "./src/Containers/Home/index.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_Components_WriteModal__ = __webpack_require__("./src/Components/WriteModal/index.tsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_Components_ArticleList__ = __webpack_require__("./src/Components/ArticleList/index.tsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_router_dom__ = __webpack_require__("react-router-dom");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_router_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_helmet__ = __webpack_require__("react-helmet");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_helmet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_helmet__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__style_css__ = __webpack_require__("./src/Containers/Home/style.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__style_css__);






class Home extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
    // tslint:disable-next-line:typedef
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        if (this.props.me) {
            /*if (this.props.me.completedProfile === 1 || completedProfile === 0){
        this.props.hostory.replace('/add/profile');
      }*/
        }
    }
    render() {
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-width-1-1" },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4_react_helmet__["Helmet"], null,
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("title", null, "Unizonn | Home"),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("meta", { name: "an inclusive community", content: "Unizonn community" })),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_Components_WriteModal__["a" /* default */], null),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-flex" },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_Components_ArticleList__["a" /* default */], null))));
    }
}
/* harmony default export */ __webpack_exports__["default"] = (Object(__WEBPACK_IMPORTED_MODULE_3_react_router_dom__["withRouter"])(Home));


/***/ }),

/***/ "./src/Containers/Home/style.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(undefined);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),

/***/ "./src/Containers/HomePublic/index.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_helmet__ = __webpack_require__("react-helmet");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_helmet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_helmet__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_Components_InputBoxLogin__ = __webpack_require__("./src/Components/InputBoxLogin/index.tsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__style_scss__ = __webpack_require__("./src/Containers/HomePublic/style.scss");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__style_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_Components_Layouts_FooterPublic__ = __webpack_require__("./src/Components/Layouts/FooterPublic/index.tsx");



// import * as Jquery from 'jquery';


const url = (name, wrap = false) => `${wrap ? 'url(' : ''}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${wrap ? ')' : ''}`;
const Pink = ({ children }) => __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { style: { color: '#FF6AC1' } }, children);
const Yellow = ({ children }) => __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { style: { color: '#EFF59B' } }, children);
const Lightblue = ({ children }) => __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { style: { color: '#9AEDFE' } }, children);
const Green = ({ children }) => __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { style: { color: '#57EE89' } }, children);
const Blue = ({ children }) => __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { style: { color: '#57C7FF' } }, children);
const Gray = ({ children }) => __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { style: { color: '#909090' } }, children);
class HomePublic extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
    constructor() {
        super(...arguments);
        this.state = {
            strokeDashOffset: 0,
            pinPin: false,
            pinUnpin: false,
        };
    }
    componentWillMount() {
        // dhsj
    }
    componentDidMount() {
        // kjk
    }
    componentWillUnmount() {
        // hjh
    }
    render() {
        // const { classes } = this.props;
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-width-1-1 ui" },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_helmet__["Helmet"], null,
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("title", null, "Unizonn | Home"),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("meta", { name: "an inclusive community", content: "Unizonn community" })),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { id: "bg1", className: "uk-section backgroundOne uk-width-1-1 uk-height-1-1 uk-light uk-background-cover", style: { height: '91vh' } },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-container" },
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-grid-match uk-flex uk-width-1-1", "uk-grid": true },
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-padding uk-width-1-2@m uk-width-1-1@s" },
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_Components_InputBoxLogin__["a" /* default */], null)),
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-padding uk-width-1-2@m uk-visible@s" }, "."))),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-position-bottom uk-visible@s" },
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4_Components_Layouts_FooterPublic__["a" /* FooterPublic */], null)))));
    }
}
/* harmony default export */ __webpack_exports__["default"] = (HomePublic);
/*

                        <iframe
                            src="//www.youtube.com/embed/a_ONcLi8tfY?autoplay=0&amp;showinfo=0&amp;rel=0&amp;modestbranding=1&amp;playsinline=1"
                            width="560"
                            height="415"
                            frameBorder="1"
                            data-uk-responsive={true}
                            uk-video="automute: true; autoplay: false"
                        />*/ 


/***/ }),

/***/ "./src/Containers/HomePublic/style.scss":
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/Containers/Maps/index.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_Components_Map__ = __webpack_require__("./src/Components/Map/index.tsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_helmet__ = __webpack_require__("react-helmet");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_helmet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_helmet__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_geolocated__ = __webpack_require__("react-geolocated");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_geolocated___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_geolocated__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__style_scss__ = __webpack_require__("./src/Containers/Maps/style.scss");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__style_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_Components_Label__ = __webpack_require__("./src/Components/Label/index.tsx");






class Maps extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
    render() {
        const { coords } = this.props;
        let lat = coords ? coords.latitude : -10.0;
        let lng = coords ? coords.longitude : -19.0;
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-width-1-1 uk-background-default" },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_react_helmet__["Helmet"], null,
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("title", null, "Unizonn | Library"),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("meta", { name: "an inclusive community", content: "Unizonn community" })),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "segment uk-card uk-card-default", style: { minHeight: 290 } },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_Components_Map__["a" /* default */], { lat: lat, lng: lng, isMarkerShown: true })),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-padding-large uk-padding-remove-vertical" },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("section", { className: "content" },
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("h4", { className: " uk-text-middle uk-flex uk-padding-small", style: { marginLeft: 90 } }, "Near Libraries"),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_5_Components_Label__["a" /* default */], { text: "Sorting from the closest" }),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-flex uk-flex-between grid grid--effect-rigel" },
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", { href: "#", className: "uk-card-default grid__item grid__item--c1" },
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "stack" },
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "stack__deco" }),
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "stack__deco" }),
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "stack__deco" }),
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "stack__deco" }),
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "stack__figure" },
                                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("img", { className: "stack__img", src: "https://tympanus.net/Development/StackMotionHoverEffects/img/2.png", alt: "Image" }))),
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "grid__item-caption uk-padding-small" },
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("h3", { className: "grid__item-title uk-text-bold" }, "First State Library"),
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "column column--left" },
                                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { className: "column__text" }, "Distance"),
                                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { className: "column__text" }, "Review")),
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "column column--right" },
                                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { className: "column__text" }, "9.1 meters"),
                                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { className: "column__text" }, "3")))),
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", { href: "#", className: "uk-card-default grid__item grid__item--c1" },
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "stack" },
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "stack__deco" }),
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "stack__deco" }),
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "stack__deco" }),
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "stack__deco" }),
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "stack__figure" },
                                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("img", { className: "stack__img", src: "https://tympanus.net/Development/StackMotionHoverEffects/img/2.png", alt: "Image" }))),
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "grid__item-caption uk-card uk-card-default uk-padding-small" },
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("h3", { className: "grid__item-title uk-text-bold" }, "City Library"),
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "column column--left" },
                                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { className: "column__text" }, "Distance"),
                                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { className: "column__text" }, "Review")),
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "column column--right" },
                                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { className: "column__text" }, "9.1 meters"),
                                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { className: "column__text" }, "3")))),
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", { href: "#", className: "uk-card-default grid__item grid__item--c1" },
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "stack" },
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "stack__deco" }),
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "stack__deco" }),
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "stack__deco" }),
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "stack__deco" }),
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "stack__figure" },
                                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("img", { className: "stack__img", src: "https://tympanus.net/Development/StackMotionHoverEffects/img/2.png", alt: "Image" }))),
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "grid__item-caption uk-card uk-card-default uk-padding-small" },
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("h3", { className: "grid__item-title uk-text-bold" }, "Library de Anglon"),
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "column column--left" },
                                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { className: "column__text" }, "Distance"),
                                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { className: "column__text" }, "Review")),
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "column column--right" },
                                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { className: "column__text" }, "50.8 meters"),
                                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { className: "column__text" }, "5.0")))),
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", { href: "#", className: "uk-card-default grid__item grid__item--c1" },
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "stack" },
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "stack__deco" }),
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "stack__deco" }),
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "stack__deco" }),
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "stack__deco" }),
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "stack__figure" },
                                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("img", { className: "stack__img", src: "https://tympanus.net/Development/StackMotionHoverEffects/img/2.png", alt: "Image" }))),
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "grid__item-caption uk-card uk-card-default uk-padding-small" },
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("h3", { className: "grid__item-title uk-text-bold" }, "City Library"),
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "column column--left" },
                                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { className: "column__text" }, "Distance"),
                                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { className: "column__text" }, "Review")),
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "column column--right" },
                                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { className: "column__text" }, "9.1 meters"),
                                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { className: "column__text" }, "3")))),
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", { href: "#", className: "uk-card-default grid__item grid__item--c1" },
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "stack" },
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "stack__deco" }),
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "stack__deco" }),
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "stack__deco" }),
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "stack__deco" }),
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "stack__figure" },
                                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("img", { className: "stack__img", src: "https://tympanus.net/Development/StackMotionHoverEffects/img/2.png", alt: "Image" }))),
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "grid__item-caption uk-card uk-card-default uk-padding-small" },
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("h3", { className: "grid__item-title uk-text-bold" }, "Library de Anglon"),
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "column column--left" },
                                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { className: "column__text" }, "Distance"),
                                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { className: "column__text" }, "Review")),
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "column column--right" },
                                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { className: "column__text" }, "50.8 meters"),
                                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { className: "column__text" }, "5.0")))))))));
    }
}
/* harmony default export */ __webpack_exports__["default"] = (Object(__WEBPACK_IMPORTED_MODULE_3_react_geolocated__["geolocated"])({
    positionOptions: {
        enableHighAccuracy: true,
    },
    userDecisionTimeout: 1000,
})(Maps));
/*

<MapComponent
            lat={lat}
            lng={lng}
            isMarkerShown={true}
          />
          */ 


/***/ }),

/***/ "./src/Containers/Maps/style.scss":
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/Containers/Message/index.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_helmet__ = __webpack_require__("react-helmet");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_helmet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_helmet__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__style_css__ = __webpack_require__("./src/Containers/Message/style.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__style_css__);



class Messages extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
    constructor() {
        super(...arguments);
        this.state = {
            messages: [],
            is_typing: false
        };
    }
    render() {
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "container" },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_helmet__["Helmet"], null,
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("title", null, "Unizonn | Chat"),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("meta", { name: "an inclusive community", content: "Unizonn community" })),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "app-wrapper" },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-flex uk-height-1-1 uk-height-match" },
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-width-1-3 uk-height-1-1" }, "hjhjh"),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-width-2-3 uk-height-1-1" },
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-padding-large" },
                            "hjhjhjh",
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "" }, "jjhjhj")))))));
    }
}
/* harmony export (immutable) */ __webpack_exports__["default"] = Messages;



/***/ }),

/***/ "./src/Containers/Message/style.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(undefined);
// imports


// module
exports.push([module.i, ".positioning {\n  height: 100%;\n  right: 0px;\n  top: 0px;\n  transition: width 0.4s ease-in-out; }\n\n.details-pane {\n  width: 0%;\n  position: absolute;\n  height: 100%;\n  right: 0px;\n  top: 0px;\n  transition: width 0.4s ease-in-out; }\n\n@media (max-device-width: 1390px) {\n  .chat-list-pane {\n    width: 36%;\n    height: 100%;\n    float: left;\n    display: flex;\n    flex-direction: column;\n    border-color: #50ce31;\n    border-right-width: 1px;\n    border-right-style: solid;\n    transition: width 0.4s ease-in-out; } }\n\n@media (max-device-width: 767px) {\n  .chat-list-pane {\n    width: 40%;\n    height: 100%;\n    float: left;\n    display: flex;\n    flex-direction: column;\n    border-color: #50ce31;\n    border-right-width: 1px;\n    border-right-style: solid;\n    transition: width 0.4s ease-in-out; } }\n\n@media (max-device-width: 480px) {\n  .chat-list-pane {\n    width: 100%;\n    height: 100%;\n    float: left;\n    display: flex;\n    flex-direction: column;\n    border-color: #50ce31;\n    border-right-width: 1px;\n    border-right-style: solid;\n    transition: width 0.4s ease-in-out; } }\n\n@media (max-device-width: 1390px) {\n  .chat-list-close {\n    width: 30%; } }\n\n@media (max-device-width: 767px) {\n  .chat-list-close {\n    width: 30%; } }\n\n@media (max-device-width: 1390px) {\n  .chat-pane {\n    width: 64%;\n    height: 100%;\n    float: left;\n    display: flex;\n    flex-direction: column;\n    transition: width 0.4s ease-in-out; } }\n\n@media (max-device-width: 767px) {\n  .chat-pane {\n    width: 60%;\n    height: 100%;\n    float: left;\n    display: flex;\n    flex-direction: column;\n    transition: width 0.4s ease-in-out; } }\n\n@media (max-device-width: 480px) {\n  .chat-pane {\n    width: 0%;\n    position: absolute;\n    z-index: 50;\n    height: 100%;\n    width: 100%;\n    top: 0;\n    right: 0;\n    display: flex;\n    flex-direction: column;\n    transition: width 0.4s ease-in-out; } }\n\n@media (max-device-width: 1390px) {\n  .chat-close {\n    width: 40%; } }\n\n@media (max-device-width: 480px) {\n  .chat-close {\n    width: 100%; } }\n\n@media (max-device-width: 1390px) {\n  .details-pane-open {\n    width: 30%;\n    height: 100%;\n    float: left;\n    transition: width 0.4s ease-in-out; } }\n\n@media (max-device-width: 767px) {\n  .details-pane-open {\n    width: 60%;\n    height: 100%;\n    float: left;\n    transition: width 0.4s ease-in-out; } }\n\n@media (max-device-width: 480px) {\n  .details-pane-open {\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    z-index: 100;\n    right: 0px;\n    top: 0px;\n    transition: width 0.4s ease-in-out; } }\n\n.details-pane-close {\n  display: none; }\n\n@media (max-device-width: 1390px) {\n  .open-chat {\n    display: none; } }\n\n@media (max-device-width: 767px) {\n  .open-chat {\n    display: none; } }\n\n@media (max-device-width: 480px) {\n  .open-chat {\n    display: inherit; } }\n", ""]);

// exports


/***/ }),

/***/ "./src/Containers/NotFound/index.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style_scss__ = __webpack_require__("./src/Containers/NotFound/style.scss");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__style_scss__);


class NotFound extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
    render() {
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "notFound" },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("main", { id: "main-404-content", className: "main-content-static" },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "content-wrap" },
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "shadow-overlay" }),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "main-content" },
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "row" },
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "col-twelve" },
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("h1", { className: "kern-this" }, "404 Error."),
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("p", null, "Oooooops! Looks like nothing was found at this location. Maybe try on of the links below, click on the top menu or try a search?"),
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "search" },
                                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("form", null,
                                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("input", { type: "text", id: "s", name: "s", className: "search-field", placeholder: "Type and hit enter \u2026" })))))),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("footer", null,
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "row" },
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "col-seven tab-full social-links pull-right" },
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("ul", null,
                                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("li", null,
                                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", { href: "#" },
                                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("i", { className: "fa fa-facebook" }))),
                                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("li", null,
                                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", { href: "#" },
                                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("i", { className: "fa fa-skype" }))),
                                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("li", null,
                                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", { href: "#" },
                                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("i", { className: "fa fa-twitter" }))),
                                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("li", null,
                                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", { href: "#" },
                                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("i", { className: "fa fa-dribbble" }))),
                                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("li", null,
                                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", { href: "#" },
                                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("i", { className: "fa fa-instagram" }))))),
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "col-five tab-full bottom-links" },
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("ul", { className: "links" },
                                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("li", null,
                                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", { href: "#" }, "Home")),
                                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("li", null,
                                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", { href: "#" }, "About")),
                                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("li", null,
                                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", { href: "#" }, "Contact"))),
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "credits" },
                                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("p", null,
                                        "Designed by ",
                                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", { href: "http://www.skyeye-themes.com/", title: "Skyeye Themes" }, "Skyeye Themes"))))))))));
    }
}
/* harmony export (immutable) */ __webpack_exports__["default"] = NotFound;



/***/ }),

/***/ "./src/Containers/NotFound/style.scss":
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/Containers/Profile/index.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom__ = __webpack_require__("react-router-dom");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_Components_Avatar__ = __webpack_require__("./src/Components/Avatar/index.tsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_apollo__ = __webpack_require__("react-apollo");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_apollo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_apollo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_Graphql_Query__ = __webpack_require__("./src/Graphql/Query/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__style_css__ = __webpack_require__("./src/Containers/Profile/style.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__style_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_Components_SeoMaker__ = __webpack_require__("./src/Components/SeoMaker/index.tsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_Components_ArticleList__ = __webpack_require__("./src/Components/ArticleList/index.tsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_Components_FollowButton__ = __webpack_require__("./src/Components/FollowButton/index.tsx");









class Profile extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
    constructor() {
        super(...arguments);
        this.state = {
            messages: [],
            is_typing: false,
        };
    }
    render() {
        const { me } = this.props;
        if (this.props.me.loading) {
            return null;
        }
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-width-1-1" },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_6_Components_SeoMaker__["a" /* default */], { title: me.me.firstname + ' ' + me.me.lastname }),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-flex uk-flex-stretch uk-width-1-1 uk-height-1-1 uk-padding-large uk-padding-remove-top uk-height-match" },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-width-1-4@m uk-width-1-1@s uk-padding-small" },
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-width-1-1 uk-text-center ui card", "data-uk-sticky": "offset: 77" },
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-text-center uk-padding-small content", style: { paddingTop: 40 } },
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-background-primary uk-width-1-1 uk-position-top", style: { height: 80 } }),
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_Components_Avatar__["a" /* default */], { size: 80, url: me.me.avatar ? me.me.avatar.url : '', presence: false }),
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("p", { className: "uk-text-bold", style: { fontSize: 16 } },
                                me.me.firstname,
                                " ",
                                me.me.lastname),
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("p", { className: "", style: { fontSize: 14 } },
                                "@",
                                me.me.username),
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("p", { style: { fontSize: 12 } }, "Founder at Gueva Technologies. Geek, programmer, interest in AI and Machine Learning, Big Data, love basketball."),
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("p", { className: "uk-text-bold ui label" }, me.me.type),
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("hr", null),
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-text-left" },
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("p", { className: "uk-text-bold" },
                                    "School: ",
                                    me.me.institution ? me.me.institution.title : ''),
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("p", { className: "uk-text-bold" },
                                    "Course: ",
                                    me.me.department ? me.me.department.name : '')),
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("hr", null),
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "ui small two buttons" },
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_8_Components_FollowButton__["a" /* default */], { liked: false, unFollowClick: () => alert('hj'), followClick: () => alert('hoS') }))))),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-width-3-4@m uk-width-1-1@s uk-padding-small" },
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-width-1-1 uk-padding-small ui card fluid" },
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-cover-container content uk-height-medium uk-card uk-card-default uk-background-primary" },
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("canvas", { width: "", height: "" }),
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("img", { src: "https://getuikit.com/docs/images/photo.jpg", alt: "cover image", "uk-cover": "ratio: 1", className: "uk-blend-hard-darken" })),
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-flex uk-flex-stretch uk-flex-between" },
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-text-left uk-padding-small", "data-uk-tab": true },
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { "data-uk-switcher": "animation: uk-animation-fade" },
                                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("button", { className: "uk-button uk-button-text uk-margin-right bolder", type: "button" },
                                        "Activity ",
                                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("br", null),
                                        " ",
                                        me.me.postCount.length),
                                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("button", { className: "uk-button uk-button-text uk-margin-right bolder", type: "button" },
                                        "Activity ",
                                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("br", null),
                                        " 345K"),
                                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("button", { className: "uk-button uk-button-text uk-margin-right bolder", type: "button" },
                                        "Interests ",
                                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("br", null),
                                        " 0"),
                                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("button", { className: "uk-button uk-button-text uk-margin-right bolder", type: "button" },
                                        "Connections",
                                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("br", null),
                                        me.me.connectTo && me.me.connectFrom ? me.me.connectTo.length + me.me.connectFrom.length : 0))),
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-text-right uk-padding-small" },
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("button", { className: "uk-button uk-button-secondary uk-button-small" }, "Message")))),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-width-1-1 uk-padding-small fluid" },
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_7_Components_ArticleList__["a" /* default */], null))))));
    }
}
/* harmony default export */ __webpack_exports__["default"] = (Object(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["withRouter"])(Object(__WEBPACK_IMPORTED_MODULE_3_react_apollo__["compose"])(__WEBPACK_IMPORTED_MODULE_3_react_apollo__["withApollo"], Object(__WEBPACK_IMPORTED_MODULE_3_react_apollo__["graphql"])(__WEBPACK_IMPORTED_MODULE_4_Graphql_Query__["i" /* ME */], { name: 'me' }))(Profile)));


/***/ }),

/***/ "./src/Containers/Profile/style.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(undefined);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),

/***/ "./src/Graphql/Fragment/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql_tag__ = __webpack_require__("graphql-tag");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql_tag___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_graphql_tag__);

/**
 * @description user graphql fragment
 */
const USER_FRAGMENT = __WEBPACK_IMPORTED_MODULE_0_graphql_tag___default.a `
  fragment userFragment on User {
    id
    firstname
    lastname
    username
    email
    gender
    avatar{
      url
      name
    }
    type
    userType
    newConnectNot
    newCommentNot
    newMessageNot
    newProfileNot
    completedProfile
    country {
      name
    }
    postCount: articles(where: {isPublished: true}){
      id
    }
    institution {
      title
    }
    department { 
      name
    }
    type
    userType
    verified
  }
`;
/* harmony export (immutable) */ __webpack_exports__["c"] = USER_FRAGMENT;

/**
 * @description user graphql fragment
 */
const ARTICLE_FRAGMENT = __WEBPACK_IMPORTED_MODULE_0_graphql_tag___default.a `
  fragment articleFragment on Article {
    id
    title
    body
    description
    isPublished
    createdAt
    updatedAt
    tags
    headerImage {
      id
      url
    }
    author{
      id
      username
      email
      avatar{
        url
      }
      firstname
      lastname
      type
      department {
        name
      }
      institution{
        title
      }
    }
    category{
      id
      name
      avatar
      createdAt
    }
    link
    type
  }
`;
/* harmony export (immutable) */ __webpack_exports__["a"] = ARTICLE_FRAGMENT;

/**
 * @description user graphql fragment
 */
const MESSAGE_FRAGMENT = __WEBPACK_IMPORTED_MODULE_0_graphql_tag___default.a `
  fragment messageFragment on Article {
    text
    user {
      id
      username
    }
    cahnnel {
      id
      updatedAt
    }
    createdAt
    updatedAt
  }
`;
/* harmony export (immutable) */ __webpack_exports__["b"] = MESSAGE_FRAGMENT;



/***/ }),

/***/ "./src/Graphql/Mutation/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql_tag__ = __webpack_require__("graphql-tag");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql_tag___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_graphql_tag__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_Graphql_Fragment__ = __webpack_require__("./src/Graphql/Fragment/index.ts");


/**
 * @description user registration for graphql mutation
 */
const SIGNUP_USER = __WEBPACK_IMPORTED_MODULE_0_graphql_tag___default.a `
  mutation signupUser($email: String!, $password: String!, $username: String!,, $firstname: String!,
   $lastname: String!, $userType: String!, $gender: String! ){
    signup( email: $email, password: $password, username: $username, firstname: $firstname,
      lastname: $lastname, type: $userType, gender: $gender) {
      token,
      user{
        ...userFragment
      }
    }
  }
  ${__WEBPACK_IMPORTED_MODULE_1_Graphql_Fragment__["c" /* USER_FRAGMENT */]}
`;
/* harmony export (immutable) */ __webpack_exports__["f"] = SIGNUP_USER;

/**
 * @description user login for graphql mutation
 * @augments email, password
 */
const LOGIN_USER = __WEBPACK_IMPORTED_MODULE_0_graphql_tag___default.a `
  mutation loginUser($email: String!, $password: String!){
    login( email: $email, password: $password ) {
      token,
      user{
        ...userFragment
      }
    }
  }
  ${__WEBPACK_IMPORTED_MODULE_1_Graphql_Fragment__["c" /* USER_FRAGMENT */]}
`;
/* harmony export (immutable) */ __webpack_exports__["e"] = LOGIN_USER;

const ADD_PROFILE = __WEBPACK_IMPORTED_MODULE_0_graphql_tag___default.a `
  mutation addProfile($photoId: ID!, $countryId: ID!, $institutionId: ID!, $departmentId: ID!){
    addProfile(photoId: $photoId, countryId: $countryId, institutionId: $institutionId, departmentId: $departmentId){
      ...userFragment
    }
  }
  ${__WEBPACK_IMPORTED_MODULE_1_Graphql_Fragment__["c" /* USER_FRAGMENT */]}
`;
/* harmony export (immutable) */ __webpack_exports__["b"] = ADD_PROFILE;

const ADD_INTERESTS = __WEBPACK_IMPORTED_MODULE_0_graphql_tag___default.a `
  mutation addInterest($interests: [String!]!){
    addInterest(interests: $interests){
      ...userFragment
    }
  }
  ${__WEBPACK_IMPORTED_MODULE_1_Graphql_Fragment__["c" /* USER_FRAGMENT */]}
`;
/* harmony export (immutable) */ __webpack_exports__["a"] = ADD_INTERESTS;

const CREATE_ARTICLE = __WEBPACK_IMPORTED_MODULE_0_graphql_tag___default.a `
  mutation createArticle($id: ID, $title: String, $body: String, $tags: [String!]!, $category: [String!]!, $photoId: ID){
    createArticle(id: $id, title: $title, body: $body, tags: $tags, category: $category, photoId: $photoId ){
      ...articleFragment
    }
  }
  ${__WEBPACK_IMPORTED_MODULE_1_Graphql_Fragment__["a" /* ARTICLE_FRAGMENT */]}
`;
/* harmony export (immutable) */ __webpack_exports__["c"] = CREATE_ARTICLE;

const PUBLISH_ARTICLE = __WEBPACK_IMPORTED_MODULE_0_graphql_tag___default.a `
  mutation publishArticle($id: ID!){
    publishArticle(id: $id){
      ...articleFragment
    }
  }
  ${__WEBPACK_IMPORTED_MODULE_1_Graphql_Fragment__["a" /* ARTICLE_FRAGMENT */]}
`;
/* unused harmony export PUBLISH_ARTICLE */

const CREATE_MESSAGE = __WEBPACK_IMPORTED_MODULE_0_graphql_tag___default.a `
  mutation createMessage($channelId: ID!, $text: String!){
    createMessage(channelId: $id, text: $text){
      text
      user {
        id
      }
      cahnnel {
        id
      }
    }
  }
  ${__WEBPACK_IMPORTED_MODULE_1_Graphql_Fragment__["b" /* MESSAGE_FRAGMENT */]}
`;
/* harmony export (immutable) */ __webpack_exports__["d"] = CREATE_MESSAGE;



/***/ }),

/***/ "./src/Graphql/Query/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql_tag__ = __webpack_require__("graphql-tag");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql_tag___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_graphql_tag__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_Graphql_Fragment__ = __webpack_require__("./src/Graphql/Fragment/index.ts");


/**
 * @description user registration for graphql mutation
 */
const SIGNUP_USER = __WEBPACK_IMPORTED_MODULE_0_graphql_tag___default.a `
  mutation signupUser($email: String!, $password: String, $firstname: String,
   $lastname: String, $userType: String!, $gender: String! ){
    signup( email: $email, password: $password, firstname: $firstname,
      lastname: $lastname, userType: $userType, gender: $gender) {
      token,
      user{
        id
      }
    }
  }
`;
/* unused harmony export SIGNUP_USER */

/**
 * @description user login for graphql mutation
 */
const LOGIN_USER = __WEBPACK_IMPORTED_MODULE_0_graphql_tag___default.a `
  mutation loginUser($email: String!, $password: String, $firstname: String,
   $lastname: String, $userType: String!, $gender: String! ){
    login( email: $email, password: $password ) {
      token,
      user{
        id
      }
    }
  }
`;
/* unused harmony export LOGIN_USER */

/**
 * @description check if user exist by email
 */
const USER_EXIST = __WEBPACK_IMPORTED_MODULE_0_graphql_tag___default.a `
  query userExist($email: String!){
    userExist( email: $email)
  }
`;
/* harmony export (immutable) */ __webpack_exports__["j"] = USER_EXIST;

/**
 * @description check if current user article
 */
const ARTICLES = __WEBPACK_IMPORTED_MODULE_0_graphql_tag___default.a `
  query articles {
    articles{
      ...articleFragment
    }
  }
  ${__WEBPACK_IMPORTED_MODULE_1_Graphql_Fragment__["a" /* ARTICLE_FRAGMENT */]}
`;
/* harmony export (immutable) */ __webpack_exports__["e"] = ARTICLES;

/**
 * @description get one article by id
 */
const GET_ARTICLE_BY_ID = __WEBPACK_IMPORTED_MODULE_0_graphql_tag___default.a `
  query getArticleById($id: ID!){
    getArticleById(id: $id){
      ...articleFragment
    }
  }
  ${__WEBPACK_IMPORTED_MODULE_1_Graphql_Fragment__["a" /* ARTICLE_FRAGMENT */]}
`;
/* harmony export (immutable) */ __webpack_exports__["g"] = GET_ARTICLE_BY_ID;

/**
 * @description get one article by slug
 */
const GET_ARTICLE_BY_SLUG = __WEBPACK_IMPORTED_MODULE_0_graphql_tag___default.a `
  query getArticleBySlug($slug: ID!){
    getArticleBySlug(slug: $slug){
      ...articleFragment
    }
  }
  ${__WEBPACK_IMPORTED_MODULE_1_Graphql_Fragment__["a" /* ARTICLE_FRAGMENT */]}
`;
/* unused harmony export GET_ARTICLE_BY_SLUG */

/**
 * @description check if current user article
 */
const ME = __WEBPACK_IMPORTED_MODULE_0_graphql_tag___default.a `
  query me {
    me{
      ...userFragment
      connectTo(where: {status: 2}){
        id
      }
      connectFrom(where: {status: 2}){
        id
      }
      avatar{
        url
        name
      }
      articles{
        id
        title
        body
      }
    }
  }
  ${__WEBPACK_IMPORTED_MODULE_1_Graphql_Fragment__["c" /* USER_FRAGMENT */]}
`;
/* harmony export (immutable) */ __webpack_exports__["i"] = ME;

/**
 * @description get all countries
 */
const ALL_COUNTRIES = __WEBPACK_IMPORTED_MODULE_0_graphql_tag___default.a `
  query allcountries{
    getCountry{
      id
      name
      shortName
    }
  }
`;
/* harmony export (immutable) */ __webpack_exports__["a"] = ALL_COUNTRIES;

/**
 * @description get all departments in institution
 */
const ALL_DEPARTMENTS = __WEBPACK_IMPORTED_MODULE_0_graphql_tag___default.a `
  query getDepartment($idInstitutions: ID!){
    getDepartment(idInstitutions: $idInstitutions){
      id
      name
    }
  }
`;
/* harmony export (immutable) */ __webpack_exports__["b"] = ALL_DEPARTMENTS;

/**
 * @description get all departments
 */
const ALL_INSTITUTION = __WEBPACK_IMPORTED_MODULE_0_graphql_tag___default.a `
  query getInstitution($idCountry: ID!){
    getInstitution(idCountry: $idCountry){
      id
      title
    }
  }
`;
/* harmony export (immutable) */ __webpack_exports__["c"] = ALL_INSTITUTION;

/**
 * @description get all interest
 */
const ALL_INTEREST = __WEBPACK_IMPORTED_MODULE_0_graphql_tag___default.a `
  query allInterest{
    allInterest{
      id
      name
      avatar
      createdAt
    }
  }
`;
/* harmony export (immutable) */ __webpack_exports__["d"] = ALL_INTEREST;

/**
 * @description get all interest
 */
const ALL_CHAT = __WEBPACK_IMPORTED_MODULE_0_graphql_tag___default.a `
  query getAllChat{
    getAllChat{
      id
      name
      avatar
      createdAt
    }
  }
`;
/* unused harmony export ALL_CHAT */

/**
 * @description get all messages
 */
const GET_MESSAGES = __WEBPACK_IMPORTED_MODULE_0_graphql_tag___default.a `
  query getMessages($channelId: ID!){
    getMessages(channelId: $channelId){
      id
      user {
        id
      }
      text
      createdAt
    }
  }
`;
/* harmony export (immutable) */ __webpack_exports__["h"] = GET_MESSAGES;

/**
 * @description get all messages
 */
const GET_ALL_MY_CHANNEL = __WEBPACK_IMPORTED_MODULE_0_graphql_tag___default.a `
  query getAllChat{
    getAllChat{
      id
      messages
      createdAt
    }
  }
`;
/* harmony export (immutable) */ __webpack_exports__["f"] = GET_ALL_MY_CHANNEL;



/***/ }),

/***/ "./src/Graphql/Resolvers/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const resolvers = {
    Mutation: {
        updateNetworkStatus: (_, { isConnected }, { cache }) => {
            const data = {
                networkStatus: { isConnected },
            };
            cache.writeData({ data });
        },
    }
};
/* harmony default export */ __webpack_exports__["a"] = (resolvers);


/***/ }),

/***/ "./src/Html.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_serialize_javascript__ = __webpack_require__("serialize-javascript");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_serialize_javascript___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_serialize_javascript__);
//tslint:disable


const Html = ({ assets, markup, client: { cache }, asyncState }) => (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("html", { lang: "en" },
    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("head", null,
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("meta", { "http-equiv": "X-UA-Compatible", content: "IE=edge" }),
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("meta", { charSet: "utf-8" }),
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("title", null, "Unizonn"),
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("meta", { name: "viewport", content: "width=device-width, initial-scale=1, shrink-to-fit=yes" }),
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("meta", { name: "mobile-web-app-capable", content: "yes" }),
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("link", { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" }),
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("link", { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32x32.png" }),
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("link", { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon-16x16.png" }),
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }),
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("link", { rel: "manifest", href: "/site.webmanifest" }),
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("link", { rel: "mask-icon", href: "/safari-pinned-tab.svg", color: "#5bbad5" }),
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("meta", { name: "msapplication-TileColor", content: "#da532c" }),
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("meta", { property: "og:image:width", content: "145" }),
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("meta", { property: "og:image:height", content: "76" }),
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("meta", { property: "og:title", content: "Unizonn" }),
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("meta", { property: "og:url", content: "http://unizonn.com" }),
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("meta", { property: "og:image", content: "http://unizonn.com/static/og-image.jpg" }),
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("meta", { property: "og:description", content: "social community for students and academia" }),
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("meta", { name: "theme-color", content: "teal" }),
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("link", { href: "https://fonts.googleapis.com/css?family=Raleway", rel: "stylesheet", crossOrigin: "anonymous" }),
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("link", { href: "node_modules/semantic-ui-css/semantic.min.js", rel: "stylesheet", crossOrigin: "anonymous" }),
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("link", { href: "https://fonts.googleapis.com/css?family=Crimson+Text|Muli|Raleway", rel: "stylesheet", crossOrigin: "anonymous" }),
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("link", { href: "https://unpkg.com/material-components-web@latest/dist/material-components-web.css", rel: "stylesheet", crossOrigin: "anonymous" }),
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("link", { href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css", rel: "stylesheet", crossOrigin: "anonymous" }),
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("link", { href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/fonts/fontawesome-webfont.svg", crossOrigin: "anonymous" }),
        assets.client.css
            ? __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("link", { rel: "stylesheet", href: assets.client.css })
            : null,
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("script", { src: "https://cdnjs.cloudflare.com/ajax/libs/uikit/3.0.0-beta.40/js/uikit.min.js", crossOrigin: "anonymous" }),
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("script", { src: "https://cdnjs.cloudflare.com/ajax/libs/uikit/3.0.0-beta.40/js/uikit-icons.min.js", crossOrigin: "anonymous" }),
         false
            ? React.createElement("script", { src: assets.client.js, defer: true })
            : __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("script", { src: assets.client.js, defer: true, crossOrigin: "anonymous" })),
    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("body", null,
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { id: "root" }, markup),
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("script", { charSet: "UTF-8", dangerouslySetInnerHTML: {
                __html: `,`,
            }, crossOrigin: "anonymous" }),
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("script", { charSet: "UTF-8", dangerouslySetInnerHTML: {
                __html: `window.__APOLLO_STATE__=${JSON.stringify(cache.extract())};`,
            }, crossOrigin: "anonymous" }),
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("script", { charSet: "UTF-8", dangerouslySetInnerHTML: {
                __html: `window.ASYNC_COMPONENT_STATE=${__WEBPACK_IMPORTED_MODULE_1_serialize_javascript___default()(asyncState)};`,
            }, crossOrigin: "anonymous" }),
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("script", { src: "/static/bundle.js", charSet: "UTF-8", crossOrigin: "anonymous" }),
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("script", { src: "/semantic-ui/semantic.js", crossOrigin: "anonymous" }),
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("script", { src: "https://unpkg.com/material-components-web@latest/dist/material-components-web.js" }),
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("script", { crossOrigin: "anonymous" }, "mdc.autoInit()"))));
/* harmony default export */ __webpack_exports__["a"] = (Html);
// <script src="/semantic-ui/semantic.js" />


/***/ }),

/***/ "./src/Theme/application.scss":
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/Utils/helper.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = b64toBlob;
/* harmony export (immutable) */ __webpack_exports__["c"] = urltoFile;
/* harmony export (immutable) */ __webpack_exports__["b"] = strip_html_tags;
const truncString = (value, add, max) => {
    add = add || '...';
    return (value.length > max ? value.substring(0, max) + add : value);
};
/* unused harmony export truncString */

const lengthInMinutes = (value) => {
    const min = value.split(' ').length / 250;
    if (min <= 0 || min === 0) {
        return 'less than a minute read';
    }
    else if (min <= 0.9 || min === 0.9) {
        return 'less than a minute read';
    }
    else {
        return `${min} min read`;
    }
};
/* unused harmony export lengthInMinutes */

// tslint:disable-next-line:only-arrow-functions
function b64toBlob(b64Data, contentType, sliceSize) {
    contentType = contentType || '';
    sliceSize = sliceSize || 512;
    const byteCharacters = atob(b64Data);
    const byteArrays = [];
    for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
        const slice = byteCharacters.slice(offset, offset + sliceSize);
        const byteNumbers = new Array(slice.length);
        for (let i = 0; i < slice.length; i++) {
            byteNumbers[i] = slice.charCodeAt(i);
        }
        const byteArray = new Uint8Array(byteNumbers);
        byteArrays.push(byteArray);
    }
    const blob = new Blob(byteArrays, { type: contentType });
    return blob;
}
// tslint:disable-next-line:only-arrow-functions
function urltoFile(url, filename, mimeType) {
    return (fetch(url)
        .then((res) => res.arrayBuffer())
        .then((buf) => new File([buf], filename, { type: mimeType })));
}
// tslint:disable-next-line:only-arrow-functions
function strip_html_tags(str) {
    if ((str === null) || (str === '')) {
        return false;
    }
    else {
        str = str.toString();
    }
    return str.replace(/<[^>]*>/g, '');
}


/***/ }),

/***/ "./src/Utils/helpers.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = validateLogin;
/* harmony export (immutable) */ __webpack_exports__["c"] = validateSignup;
/* harmony export (immutable) */ __webpack_exports__["b"] = validateProfile;
// tslint:disable-next-line:only-arrow-functions
function validateLogin(email, password) {
    // true means invalid, so our conditions got reversed
    return {
        email: email.length === 0,
        password: password.length === 0,
    };
}
// tslint:disable-next-line:only-arrow-functions
function validateSignup(email, password, username, confirmPassword, firstname, lastname, gender, userType) {
    // true means invalid, so our conditions got reversed
    return {
        email: email.length === 0,
        username: username.length === 0,
        password: password.length === 0,
        confirmPassword: confirmPassword.length === 0 && confirmPassword !== password,
        lastname: lastname.length === 0,
        gender: gender.length === 0,
        userType: userType.length === 0,
        firstname: firstname.length === 0,
    };
}
// tslint:disable-next-line:only-arrow-functions
function validateProfile(photo, country, institution, department) {
    // true means invalid, so our conditions got reversed
    return {
        photo: photo.length === 0,
        country: country.length === 0,
        institution: institution.length === 0,
        department: department.length === 0,
    };
}


/***/ }),

/***/ "./src/Utils/jwtHelper.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export getTokenExpirationDate */
/* harmony export (immutable) */ __webpack_exports__["a"] = isTokenExpired;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jwt_decode__ = __webpack_require__("jwt-decode");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jwt_decode___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jwt_decode__);

// tslint:disable-next-line:only-arrow-functions
function getTokenExpirationDate(token) {
    const decoded = __WEBPACK_IMPORTED_MODULE_0_jwt_decode___default()(token);
    if (!decoded.exp) {
        return null;
    }
    const date = new Date(0); // The 0 here is the key, which sets the date to the epoch
    date.setUTCSeconds(decoded.exp);
    return date;
}
// tslint:disable-next-line:only-arrow-functions
function isTokenExpired(token) {
    const date = getTokenExpirationDate(token);
    const offsetSeconds = 0;
    if (date === null) {
        return false;
    }
    return !(date.valueOf() > (new Date().valueOf() + (offsetSeconds * 1000)));
}


/***/ }),

/***/ "./src/constants.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const AUTH_TOKEN = 'token';
/* harmony export (immutable) */ __webpack_exports__["a"] = AUTH_TOKEN;

const CURRENT_USER = 'current_user';
/* harmony export (immutable) */ __webpack_exports__["b"] = CURRENT_USER;



/***/ }),

/***/ "./src/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_http__ = __webpack_require__("http");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_http___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_http__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__server__ = __webpack_require__("./src/server.tsx");


const server = __WEBPACK_IMPORTED_MODULE_0_http__["createServer"](__WEBPACK_IMPORTED_MODULE_1__server__["default"]);
let currentApp = __WEBPACK_IMPORTED_MODULE_1__server__["default"];
server.listen("3000" || 3000, (err) => {
    if (err) {
        console.log(err);
    }
    console.log('🚀 started');
});
if (true) {
    console.log('✅  Server-side HMR Enabled!');
    module.hot.accept("./src/server.tsx", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ __WEBPACK_IMPORTED_MODULE_1__server__ = __webpack_require__("./src/server.tsx"); (() => {
        console.log('🔁  HMR Reloading `./server`...');
        server.removeListener('request', currentApp);
        const newApp = __webpack_require__("./src/server.tsx").default;
        server.on('request', newApp);
        currentApp = newApp;
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); });
}


/***/ }),

/***/ "./src/link.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_apollo_link__ = __webpack_require__("apollo-link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_apollo_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_apollo_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_apollo_link_http__ = __webpack_require__("apollo-link-http");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_apollo_link_http___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_apollo_link_http__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_apollo_link_ws__ = __webpack_require__("apollo-link-ws");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_apollo_link_ws___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_apollo_link_ws__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_apollo_link_error__ = __webpack_require__("apollo-link-error");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_apollo_link_error___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_apollo_link_error__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_apollo_utilities__ = __webpack_require__("apollo-utilities");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_apollo_utilities___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_apollo_utilities__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_cookie_banner__ = __webpack_require__("react-cookie-banner");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_cookie_banner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_cookie_banner__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_apollo_link_retry__ = __webpack_require__("apollo-link-retry");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_apollo_link_retry___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_apollo_link_retry__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_Graphql_Resolvers__ = __webpack_require__("./src/Graphql/Resolvers/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_apollo_cache_inmemory__ = __webpack_require__("apollo-cache-inmemory");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_apollo_cache_inmemory___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_apollo_cache_inmemory__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_apollo_link_state__ = __webpack_require__("apollo-link-state");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_apollo_link_state___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_apollo_link_state__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_node_fetch__ = __webpack_require__("node-fetch");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_node_fetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_node_fetch__);






// import { createPersistedQueryLink } from 'apollo-link-persisted-queries';





const AUTH_TOKEN = 'token';
const cookies = new __WEBPACK_IMPORTED_MODULE_5_react_cookie_banner__["Cookies"]('unizonn');
/* harmony export (immutable) */ __webpack_exports__["a"] = cookies;

const errorLink = Object(__WEBPACK_IMPORTED_MODULE_3_apollo_link_error__["onError"])(({ graphQLErrors, networkError }) => {
    /*
    onError receives a callback in the event a GraphQL or network error occurs.
    This example is a bit contrived, but in the real world, you could connect
    a logging service to the errorLink or perform a specific action in response
    to an error.
    */
    // tslint:disable-next-line:curly
    if (graphQLErrors)
        graphQLErrors.map(({ message, location, path }) => console.log(`[GraphQL error]: Message: ${message}, Location: ${location}, Path: ${path}`));
    // tslint:disable-next-line:curly
    if (networkError)
        console.log(`[Network error]: ${networkError}`);
});
/* harmony export (immutable) */ __webpack_exports__["b"] = errorLink;

const httpLink = new __WEBPACK_IMPORTED_MODULE_1_apollo_link_http__["HttpLink"]({ uri: 'http://localhost:4000', fetch: __WEBPACK_IMPORTED_MODULE_10_node_fetch___default.a });
/* unused harmony export httpLink */

const middlewareLink = new __WEBPACK_IMPORTED_MODULE_0_apollo_link__["ApolloLink"]((operation, forward) => {
    // get the authentication token from local storage if it exists
    const authToken = cookies.get(AUTH_TOKEN);
    // return the headers to the context so httpLink can read them
    operation.setContext({
        headers: {
            Authorization: authToken ? `Bearer ${authToken}` : '',
        }
    });
    return forward(operation);
});
/* unused harmony export middlewareLink */

const httpLinkAuth = middlewareLink.concat(httpLink);
/* harmony export (immutable) */ __webpack_exports__["c"] = httpLinkAuth;

const subscriptionLink = (config = {}) => new __WEBPACK_IMPORTED_MODULE_2_apollo_link_ws__["WebSocketLink"](Object.assign({ uri:  true
        ? 'ws://uniserver.now.sh'
        : 'wss://uniserver.now.sh', options: { reconnect: true } }, config));
/* unused harmony export subscriptionLink */

const queryOrMutationLink = (config = {}) => 
// turn on CDN support via GET
// createPersistedQueryLink({ useGETForHashedQueries: true }).concat(
new __WEBPACK_IMPORTED_MODULE_1_apollo_link_http__["HttpLink"](Object.assign({}, config, { credentials: 'same-origin' }));
/* unused harmony export queryOrMutationLink */

// );
const requestLink = ({ queryOrMutationLink, subscriptionLink }) => 
/*
  This link checks if the operation is a subscription.
  If it is, we use our subscription link to retrieve data over WebSockets.
  If it is a query or mutation, we retrieve data over HTTP.
*/
__WEBPACK_IMPORTED_MODULE_0_apollo_link__["ApolloLink"].split(({ query }) => {
    const { kind, operation } = Object(__WEBPACK_IMPORTED_MODULE_4_apollo_utilities__["getMainDefinition"])(query);
    return kind === 'OperationDefinition' && operation === 'subscription';
}, subscriptionLink, queryOrMutationLink);
/* unused harmony export requestLink */

const defaults = { appState: 'INITIAL' };
const retryLink = new __WEBPACK_IMPORTED_MODULE_6_apollo_link_retry__["RetryLink"]();
/* harmony export (immutable) */ __webpack_exports__["d"] = retryLink;

const cache = new __WEBPACK_IMPORTED_MODULE_8_apollo_cache_inmemory__["InMemoryCache"]();
/* unused harmony export cache */

const stateLink = Object(__WEBPACK_IMPORTED_MODULE_9_apollo_link_state__["withClientState"])({
    cache,
    resolvers: __WEBPACK_IMPORTED_MODULE_7_Graphql_Resolvers__["a" /* default */],
    defaults
});
/* harmony export (immutable) */ __webpack_exports__["e"] = stateLink;



/***/ }),

/***/ "./src/server.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__("express");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom_server__ = __webpack_require__("react-dom/server");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom_server___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_dom_server__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_router_dom__ = __webpack_require__("react-router-dom");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_router_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_async_component__ = __webpack_require__("react-async-component");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_async_component___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_async_component__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_async_bootstrapper__ = __webpack_require__("react-async-bootstrapper");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_async_bootstrapper___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_async_bootstrapper__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_helmet__ = __webpack_require__("helmet");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_helmet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_helmet__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_compression__ = __webpack_require__("compression");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_compression___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_compression__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_cookie_parser__ = __webpack_require__("cookie-parser");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_cookie_parser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_cookie_parser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_body_parser__ = __webpack_require__("body-parser");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_body_parser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_body_parser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_morgan__ = __webpack_require__("morgan");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_morgan___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_morgan__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_apollo_client__ = __webpack_require__("apollo-client");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_apollo_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_apollo_client__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_react_apollo__ = __webpack_require__("react-apollo");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_react_apollo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_react_apollo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_apollo_cache_inmemory__ = __webpack_require__("apollo-cache-inmemory");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_apollo_cache_inmemory___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_apollo_cache_inmemory__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_apollo_link__ = __webpack_require__("apollo-link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_apollo_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_apollo_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_isomorphic_unfetch__ = __webpack_require__("isomorphic-unfetch");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_isomorphic_unfetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_isomorphic_unfetch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__Containers_App__ = __webpack_require__("./src/Containers/App/index.tsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__link__ = __webpack_require__("./src/link.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_Html__ = __webpack_require__("./src/Html.tsx");

















// import { createPersistedQueryLink } from 'apollo-link-persisted-queries';


const links = [
    __WEBPACK_IMPORTED_MODULE_17__link__["b" /* errorLink */],
    __WEBPACK_IMPORTED_MODULE_17__link__["d" /* retryLink */],
    __WEBPACK_IMPORTED_MODULE_17__link__["e" /* stateLink */],
    __WEBPACK_IMPORTED_MODULE_17__link__["c" /* httpLinkAuth */]
];
let assets;
String.prototype.truncString = function (add, max) {
    add = add || '...';
    return (this.length > max ? this.substring(0, max) + add : this);
};
String.prototype.lengthInMinutes = function () {
    const min = this.split(' ').length / 250;
    if (min <= 0 || min === 0) {
        return 'less than a minute read';
    }
    else if (min <= 0.9 || min === 0.9) {
        return 'less than a minute read';
    }
    else {
        return `${min} min read`;
    }
};
const syncLoadAssets = () => {
    assets = __webpack_require__("./build/assets.json");
};
syncLoadAssets();
const server = __WEBPACK_IMPORTED_MODULE_0_express__();
server
    .disable('x-powered-by')
    .use(__WEBPACK_IMPORTED_MODULE_6_helmet___default()())
    .use(__WEBPACK_IMPORTED_MODULE_7_compression___default()())
    .use(__WEBPACK_IMPORTED_MODULE_10_morgan___default()('dev'))
    .use(__WEBPACK_IMPORTED_MODULE_8_cookie_parser___default()())
    .use(__WEBPACK_IMPORTED_MODULE_0_express__["static"]("C:\\Users\\juicycleff\\Documents\\Projects\\Unizonn\\unizonn\\public"))
    .get('/*', (req, res) => {
    if (false) {
        // links.unshift(createPersistedQueryLink());
    }
    const client = new __WEBPACK_IMPORTED_MODULE_11_apollo_client___default.a({
        ssrMode: true,
        link: __WEBPACK_IMPORTED_MODULE_14_apollo_link__["ApolloLink"].from(links),
        cache: new __WEBPACK_IMPORTED_MODULE_13_apollo_cache_inmemory__["InMemoryCache"](),
    });
    const context = {};
    const modules = [];
    const asyncContext = Object(__WEBPACK_IMPORTED_MODULE_4_react_async_component__["createAsyncContext"])();
    const markup = (
    // tslint:disable-next-line:no-unused-expression
    __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4_react_async_component__["AsyncComponentProvider"], { asyncContext: asyncContext },
        __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_12_react_apollo__["ApolloProvider"], { client: client },
            __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3_react_router_dom__["StaticRouter"], { context: context, location: req.url },
                __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_16__Containers_App__["a" /* default */], null)))));
    __WEBPACK_IMPORTED_MODULE_5_react_async_bootstrapper___default()(markup).then(() => {
        const asyncState = asyncContext.getState();
        Object(__WEBPACK_IMPORTED_MODULE_12_react_apollo__["renderToStringWithData"])(markup).then((content) => {
            res.status(200);
            const html = __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_18_Html__["a" /* default */], { assets: assets, markup: markup, client: client, asyncState: asyncState });
            res.send(`<!doctype html>\n${Object(__WEBPACK_IMPORTED_MODULE_2_react_dom_server__["renderToString"])(html)}`);
            res.end();
        })
            .catch((e) => {
            console.error('RENDERING ERROR:', e); // eslint-disable-line no-console
            /* res.status(500);
            res.end(
              `An error occurred. Please submit ane:\n\n${
                e.stack
              }`
            );*/
            res.status(200);
            const html = __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_18_Html__["a" /* default */], { assets: assets, markup: markup, client: client, asyncState: asyncState });
            res.send(`<!doctype html>\n${Object(__WEBPACK_IMPORTED_MODULE_2_react_dom_server__["renderToString"])(html)}`);
            res.end();
        });
    });
})
    .use(__WEBPACK_IMPORTED_MODULE_9_body_parser___default.a.json());
/* harmony default export */ __webpack_exports__["default"] = (server);


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("./node_modules/razzle/node_modules/webpack/hot/poll.js?300");
module.exports = __webpack_require__("./src/index.ts");


/***/ }),

/***/ "anchor-ui/button":
/***/ (function(module, exports) {

module.exports = require("anchor-ui/button");

/***/ }),

/***/ "anchor-ui/channel-header":
/***/ (function(module, exports) {

module.exports = require("anchor-ui/channel-header");

/***/ }),

/***/ "anchor-ui/emoji-menu":
/***/ (function(module, exports) {

module.exports = require("anchor-ui/emoji-menu");

/***/ }),

/***/ "anchor-ui/icons/icon-add-friend":
/***/ (function(module, exports) {

module.exports = require("anchor-ui/icons/icon-add-friend");

/***/ }),

/***/ "anchor-ui/icons/icon-emoji":
/***/ (function(module, exports) {

module.exports = require("anchor-ui/icons/icon-emoji");

/***/ }),

/***/ "anchor-ui/icons/icon-people":
/***/ (function(module, exports) {

module.exports = require("anchor-ui/icons/icon-people");

/***/ }),

/***/ "anchor-ui/list":
/***/ (function(module, exports) {

module.exports = require("anchor-ui/list");

/***/ }),

/***/ "anchor-ui/list-item":
/***/ (function(module, exports) {

module.exports = require("anchor-ui/list-item");

/***/ }),

/***/ "anchor-ui/message":
/***/ (function(module, exports) {

module.exports = require("anchor-ui/message");

/***/ }),

/***/ "anchor-ui/message-input":
/***/ (function(module, exports) {

module.exports = require("anchor-ui/message-input");

/***/ }),

/***/ "anchor-ui/message-list":
/***/ (function(module, exports) {

module.exports = require("anchor-ui/message-list");

/***/ }),

/***/ "anchor-ui/modal":
/***/ (function(module, exports) {

module.exports = require("anchor-ui/modal");

/***/ }),

/***/ "anchor-ui/search-box":
/***/ (function(module, exports) {

module.exports = require("anchor-ui/search-box");

/***/ }),

/***/ "anchor-ui/theme-provider":
/***/ (function(module, exports) {

module.exports = require("anchor-ui/theme-provider");

/***/ }),

/***/ "apollo-cache-inmemory":
/***/ (function(module, exports) {

module.exports = require("apollo-cache-inmemory");

/***/ }),

/***/ "apollo-client":
/***/ (function(module, exports) {

module.exports = require("apollo-client");

/***/ }),

/***/ "apollo-link":
/***/ (function(module, exports) {

module.exports = require("apollo-link");

/***/ }),

/***/ "apollo-link-error":
/***/ (function(module, exports) {

module.exports = require("apollo-link-error");

/***/ }),

/***/ "apollo-link-http":
/***/ (function(module, exports) {

module.exports = require("apollo-link-http");

/***/ }),

/***/ "apollo-link-retry":
/***/ (function(module, exports) {

module.exports = require("apollo-link-retry");

/***/ }),

/***/ "apollo-link-state":
/***/ (function(module, exports) {

module.exports = require("apollo-link-state");

/***/ }),

/***/ "apollo-link-ws":
/***/ (function(module, exports) {

module.exports = require("apollo-link-ws");

/***/ }),

/***/ "apollo-utilities":
/***/ (function(module, exports) {

module.exports = require("apollo-utilities");

/***/ }),

/***/ "axios":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "body-parser":
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),

/***/ "compression":
/***/ (function(module, exports) {

module.exports = require("compression");

/***/ }),

/***/ "cookie-parser":
/***/ (function(module, exports) {

module.exports = require("cookie-parser");

/***/ }),

/***/ "draft-js":
/***/ (function(module, exports) {

module.exports = require("draft-js");

/***/ }),

/***/ "express":
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),

/***/ "glamorous":
/***/ (function(module, exports) {

module.exports = require("glamorous");

/***/ }),

/***/ "graphql-tag":
/***/ (function(module, exports) {

module.exports = require("graphql-tag");

/***/ }),

/***/ "helmet":
/***/ (function(module, exports) {

module.exports = require("helmet");

/***/ }),

/***/ "http":
/***/ (function(module, exports) {

module.exports = require("http");

/***/ }),

/***/ "isomorphic-unfetch":
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "jwt-decode":
/***/ (function(module, exports) {

module.exports = require("jwt-decode");

/***/ }),

/***/ "lodash":
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),

/***/ "medium-draft":
/***/ (function(module, exports) {

module.exports = require("medium-draft");

/***/ }),

/***/ "medium-draft/lib/exporter":
/***/ (function(module, exports) {

module.exports = require("medium-draft/lib/exporter");

/***/ }),

/***/ "medium-draft/lib/importer":
/***/ (function(module, exports) {

module.exports = require("medium-draft/lib/importer");

/***/ }),

/***/ "morgan":
/***/ (function(module, exports) {

module.exports = require("morgan");

/***/ }),

/***/ "node-fetch":
/***/ (function(module, exports) {

module.exports = require("node-fetch");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-apollo":
/***/ (function(module, exports) {

module.exports = require("react-apollo");

/***/ }),

/***/ "react-async-bootstrapper":
/***/ (function(module, exports) {

module.exports = require("react-async-bootstrapper");

/***/ }),

/***/ "react-async-component":
/***/ (function(module, exports) {

module.exports = require("react-async-component");

/***/ }),

/***/ "react-avatar-image-cropper":
/***/ (function(module, exports) {

module.exports = require("react-avatar-image-cropper");

/***/ }),

/***/ "react-content-loader":
/***/ (function(module, exports) {

module.exports = require("react-content-loader");

/***/ }),

/***/ "react-cookie-banner":
/***/ (function(module, exports) {

module.exports = require("react-cookie-banner");

/***/ }),

/***/ "react-dom/server":
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),

/***/ "react-geolocated":
/***/ (function(module, exports) {

module.exports = require("react-geolocated");

/***/ }),

/***/ "react-google-maps":
/***/ (function(module, exports) {

module.exports = require("react-google-maps");

/***/ }),

/***/ "react-helmet":
/***/ (function(module, exports) {

module.exports = require("react-helmet");

/***/ }),

/***/ "react-idle-timer":
/***/ (function(module, exports) {

module.exports = require("react-idle-timer");

/***/ }),

/***/ "react-infinite-scroller":
/***/ (function(module, exports) {

module.exports = require("react-infinite-scroller");

/***/ }),

/***/ "react-router-dom":
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),

/***/ "react-select-plus":
/***/ (function(module, exports) {

module.exports = require("react-select-plus");

/***/ }),

/***/ "react-stack-grid":
/***/ (function(module, exports) {

module.exports = require("react-stack-grid");

/***/ }),

/***/ "react-timeago":
/***/ (function(module, exports) {

module.exports = require("react-timeago");

/***/ }),

/***/ "recompose":
/***/ (function(module, exports) {

module.exports = require("recompose");

/***/ }),

/***/ "semantic-ui-react":
/***/ (function(module, exports) {

module.exports = require("semantic-ui-react");

/***/ }),

/***/ "serialize-javascript":
/***/ (function(module, exports) {

module.exports = require("serialize-javascript");

/***/ }),

/***/ "uikit":
/***/ (function(module, exports) {

module.exports = require("uikit");

/***/ })

/******/ });
//# sourceMappingURL=server.js.map