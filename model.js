function Domain() {
}

function Identity(anonymousId) {
    this.anonymousId = anonymousId;
    this.activeShares = ko.observableArray();
}

function IdentityListShare(domain, identity, list) {
    this.unique = newGuid();
    this.domain = domain;
    this.identity = identity;
    this.list = list;

    identity.activeShares.unshift(this);
}

function List(identifier) {
    this.identifier = identifier;

    this.nameCandidates = ko.observableArray();
}

function List__name(domain, list, prior, value) {
    this.domain = domain;
    this.list = list;
    this.prior = prior;
    this.value = value;

    for (i in prior) {
        list.nameCandidates.splice(list.nameCandidates.indexOf(prior[i]), 1);
    }
    list.nameCandidates.unshift(this);
}
