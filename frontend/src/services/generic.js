export const addDocument = async (collectionRef, document) => {
    const res = await collectionRef.add(document);
    const id = res.id;
    await collectionRef.doc(id).update({id, ...document});
};

export const updateDocument = async (collectionRef, id, document) => {
    await collectionRef.doc(id).update({id, ...document});
};

export const getDocuments = async (collectionRef, filters, offset, limit) => {
    let filteredCollection = collectionRef;
    Object.keys(filters).forEach(async key => {
        filteredCollection = await filteredCollection.where(key, '==', filters[key]);
    });
    filteredCollection = filteredCollection.orderBy('createdOn', 'desc');

    if (offset) {
        filteredCollection = await filteredCollection.startAfter(offset);
    }

    const documents = await filteredCollection.limit(limit).get();
    const results = [];
    for (let i = 0; i < documents.docs.length; i++) {
        const result = await documents.docs[i].data();
        result.id = documents.docs[i].id;
        results.push(result);
    }

    if (results.length === limit)
        return ({ results, next: results[limit - 1].createdAt });
    if (results.length === 0)
        return({});
    return({ results });
};

export const getDocumentById = async (collectionRef, id) => {
    const snapshot = await collectionRef.doc(id).get();
    const data = await snapshot.data();
    return data;
};

export const deleteDocument = async (collectionRef, id) => {
    await collectionRef.doc(id).delete();
};

export const removeFromBucket = async (storageRef, url) => {
    const pictureRef = storageRef.refFromURL(url);
    await pictureRef.delete();
    console.log(url);
};