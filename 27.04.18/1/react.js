        <script>
            const StarString = x => 
                <div>
                    {Array
                        .from({ length: x.length })
                        .map(() => <span></span>)
                    }
                </div>;
            
            ReactDOM.render(
                <div>
                    <StarString length={location.search.replace('?', '')} />
                </div>,
                document.querySelector('.cont')
            );
        </script>