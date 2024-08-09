//x --> rupees owned by om
//y --> price of laptop
//m --> extra fund of IIIT-A

//if total amount (x+m) will be higher than laptop price (y)
//then om can gift laptop
#include <stdio.h>
int main(void)
{
    int x,y,m;
    scanf("%d %d %d",&x,&y,&m);
    if( (x+m) >= y)
    {
        printf("YES\n");
    }
    else
    {
        printf("NO\n");
    }
	return 0;
}