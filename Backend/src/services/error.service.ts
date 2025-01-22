
export const takeNameFn = ( errorStackTrace: string ): string => {
  const regex = /at\s+\w+/;
  const coincidence = regex.exec( errorStackTrace );

  let fnErrorName;
  if ( coincidence && coincidence[0] ) {
    fnErrorName = coincidence[0];
  }
  return fnErrorName || `Can not take the function name ${errorStackTrace}`;
};

/**
 * Process the error information for insertion into the database
 */
export const handleAndInsertError = async ( error: Error ) : Promise<void> => {
  try {
    const nameFn: string = takeNameFn( error.stack! );
    // change this to insert error message on db
    console.log( nameFn );
  } catch ( error ) {
    const err = error as Error;
    throw new Error( `${err.message}` );
  }
};