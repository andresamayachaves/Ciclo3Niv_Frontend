var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

export function getAllFarmsFromBackend() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch('http://localhost:8080/api/Farm/all');
        const posts = yield response.json();
        return posts;
    });
}


export function editFarmInBackend(farm) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch('http://localhost:8080/api/Farm/update', {
            method: 'PUT',
            headers: {
                'Access-Control-Allow-Origin': "*",
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(farm)
        });
        return response;
    });
}



export function addNewFarmToBackend(farm) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch('http://localhost:8080/api/Farm/create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(farm)
        });
        return response;
    });
}


}
export function deleteFarmInBackend(farm) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch('http://localhost:8080/api/Farm/delete', {
            method: 'DELETE',
            headers: {
                "Access-Control-Allow-Origin": "*",
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(farm)
        });
        return response;
    });
}