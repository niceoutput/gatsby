import React from 'react';
import S, { documentList } from '@sanity/desk-tool/structure-builder';
import { DocumentBuilder } from '@sanity/structure/lib/Document';

// Build a custom sidebar
export default function Sidebar() {
    return S.list().title(`Slick's Slices`)
        .items([
            // create new sub-item
            S.listItem()
                .title('Home Page')
                .icon(() => <strong>🔥</strong>)
                .child(
                    S.editor()
                        .schemaType('storeSettings')
                    // make a new document ID, so we don't have a random string of numbers
                    .documentId('downtown')
            ),
            // Add in the rest of our document items
            ...S.documentTypeListItems()
                .filter(item => item.getId() !== 'storeSettings'),
        ]);
}
