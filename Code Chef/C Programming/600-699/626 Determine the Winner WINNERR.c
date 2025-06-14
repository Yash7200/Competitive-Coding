#include <stdio.h>
int main() 
{
    int t,pa,pb,qa,qb;
    scanf("%d",&t);
    for(int i=0;i<t;i++)
    {
        scanf("%d%d%d%d",&pa,&pb,&qa,&qb);
        if((pa>=pb)&&(qa>=qb))
        {
            if(pa==qa)
            {
                printf("TIE\n");
            }
            else if(pa<qa)
            {
                printf("P\n");
            }
            else
            {
                printf("Q\n");
            }
        }
        else if((pa>=pb)&&(qb>=qa))
        {
            if(pa==qb)
            {
                printf("TIE\n");
            }
            else if(pa<qb)
            {
                printf("P\n");
            }
            else
            {
                printf("Q\n");
            }
        }
        else if((pb>=pa)&&(qa>=qb))
        {
            if(pb==qa)
            {
                printf("TIE\n");
            }
            else if(pb<qa)
            {
                printf("P\n");
            }
            else
            {
                printf("Q\n");
            }
        }
        else if((pb>=pa)&&(qb>=qa))
        {
            if(pb==qb)
            {
                printf("TIE\n");
            }
            else if(pb<qb)
            {
                printf("P\n");
            }
            else
            {
                printf("Q\n");
            }
        }
    }
	return 0;
}