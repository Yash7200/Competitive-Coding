//4 companies
//'p' --> profit of company 'a'
//'q' --> profit of company 'b'
//'r' --> profit of company 'c'
//'s' --> profit of company 'd'

//if any company's profit is strictly greater than all other company then that company is in monopoly
#include <stdio.h>
int main(void)
{
	int t,p,q,r,s;
	scanf("%d",&t);
	for(int i=0;i<t;i++)
	{
	    scanf("%d %d %d %d",&p,&q,&r,&s);
	    if( (p) > (q+r+s))
	    {
	        printf("YES\n");
	    }
	    else if( (q) > (p+r+s))
	    {
	        printf("YES\n");
	    }
	    else if( (r) > (p+q+s))
	    {
	        printf("YES\n");
	    }
	    else if( (s) > (p+q+r))
	    {
	        printf("YES\n");
	    }
	    else
	    {
	        printf("NO\n");
	    }
	}
	return 0;
}